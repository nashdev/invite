const dns = require("dns").promises;
const fetch = require("isomorphic-unfetch");
const { WebClient } = require("@slack/client");
const { createMessageAdapter } = require("@slack/interactive-messages");

class RequestCache {
  constructor() {
    this.requests = {};
    this.lastId = 1;
  }
  getNextId() {
    this.lastId += 1;
    return this.lastId;
  }
  get(id) {
    return this.requests[id];
  }
  add({ email, name, reason, location, count }) {
    const id = this.getNextId();
    this.requests[id] = {
      email,
      name,
      reason,
      location,
      count
    };
    return id;
  }
}

class SlackAdapter {
  constructor() {
    this.requestCountByIp = {};
    this.requests = new RequestCache();
    this.config = {
      org: process.env.SLACK_ORG,
      inviteToken: process.env.SLACK_INVITE_TOKEN,
      channel: process.env.SLACK_INVITE_CHANNEL
    };
    this.webClient = new WebClient(process.env.SLACK_BOT_TOKEN);
    this.adapter = createMessageAdapter(process.env.SLACK_SIGNING_SECRET);

    this.adapter.action(
      { block_id: "invite_user" },
      this.handleInvite.bind(this)
    );
  }

  getIp(req) {
    const ipAddr = req.headers["x-forwarded-for"];

    if (ipAddr) {
      const list = ipAddr.split(",");
      return list[list.length - 1];
    }
    return req.connection.remoteAddress;
  }

  async getLocation(ip) {
    try {
      const req = await fetch(
        `http://ipinfo.io/${ip}?token=${process.env.IPINFO_API_TOKEN}`,
        {
          headers: {
            Accept: "application/json"
          }
        }
      );
      return await req.json();
    } catch (error) {
      console.error("Location Error:", error);
      return null;
    }
  }

  incrementRequestCount(ip) {
    const count = this.requestCountByIp[ip] || 0;
    this.requestCountByIp[ip] = count + 1;
    return this.requestCountByIp[ip];
  }

  async invite(email) {
    // Manually request an invite over rest api as the Webclient doesn't
    // have the scope to make an invite request.
    // Legacy token is required.
    const req = await fetch(
      `https://${this.config.org}.slack.com/api/users.admin.invite?token=${
        this.config.inviteToken
      }&email=${email}`
    );

    const { ok, error, needed } = await req.json();

    if (!ok) {
      if (error === "not_authed" || error === "invalid_auth") {
        throw new Error("Missing authentication.");
      } else if (error === "missing_scope" && needed === "admin") {
        throw new Error(
          `Missing admin scope: The token you provided is for an account that is not an admin. You must provide a token from an admin account in order to invite users through the Slack API.`
        );
      } else if (error === "already_invited") {
        throw new Error(
          "User has already been invited to Slack. Delete their invite and manually send again if problem persists."
        );
      } else if (error === "already_in_team") {
        throw new Error(`User is already a member of Nashdev!`);
      } else {
        throw new Error(error);
      }
    }
  }

  async handleInvite(payload, respond) {
    const { actions } = payload;
    const [action] = actions;

    if (action.action_id === "invite_approve") {
      return respond(await this.handleApprove(payload));
    }

    if (action.action_id === "invite_deny") {
      return respond(await this.handleDeny(payload));
    }

    return respond({
      text: "You clickedd something you shouldn't have clicked."
    });
  }

  async handleApprove(payload) {
    const { user, actions } = payload;
    const [action] = actions;
    const { value: requestId } = action;
    const { email } = this.requests.get(requestId);

    try {
      await this.invite(email);

      const response = {
        text: `✅ Ok, we've sent the invite.`,
        status: "Approved",
        user: user.username
      };
      return {
        replace_original: true,
        blocks: this.getNotificationBlocks(requestId, response)
      };
    } catch (error) {
      const response = {
        text: `⚠️ There was a problem sending the invite. \n *${error}*`,
        status: "Error",
        user: user.username
      };
      return {
        replace_original: true,
        blocks: this.getNotificationBlocks(requestId, response)
      };
    }
  }

  async handleDeny(payload) {
    const { user, actions } = payload;
    const [action] = actions;
    const { value: requestId } = action;

    const response = {
      text: `⛔️ Ok, we've denied this invite for now.`,
      status: "Denied",
      user: user.username
    };
    return {
      replace_original: true,
      blocks: this.getNotificationBlocks(requestId, response)
    };
  }

  getNotificationBlocks(requestId, response) {
    const { email, name, reason, location, count } = this.requests.get(
      requestId
    );
    const loc = `${location.city}, ${location.region} — ${location.country}`;
    let ip = location.ip;
    let context = [];
    let actions = [];

    if (response) {
      const status =
        response.status === "Error" ? "Attempted" : response.status;
      const user = response.user;

      context = [
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: response.text
            },
            {
              type: "plain_text",
              text: `${status} by @${user}.`,
              emoji: true
            }
          ]
        }
      ];

      ip = "REDACTED";
    }

    if (!response) {
      actions = [
        {
          type: "actions",
          block_id: "invite_user",
          elements: [
            {
              type: "button",
              action_id: "invite_approve",
              text: {
                type: "plain_text",
                text: "Approve"
              },
              value: `${requestId}`
            },
            {
              type: "button",
              action_id: "invite_deny",
              text: {
                type: "plain_text",
                text: "Deny"
              },
              value: `${requestId}`
            }
          ]
        }
      ];
    }

    return [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "A user has requested to join the NashDev slack team."
        }
      },
      {
        type: "divider"
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Name:*\n ${name}`
          },
          {
            type: "mrkdwn",
            text: `*Email:*\n ${email}`
          },
          {
            type: "mrkdwn",
            text: `*Location:*\n ${loc}`
          },
          {
            type: "mrkdwn",
            text: `*IP:*\n ${ip} (Requests: ${count})`
          }
        ]
      },
      {
        type: "divider"
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Reason:*\n${reason}`
        }
      },
      {
        type: "divider"
      },
      ...actions,
      ...context
    ];
  }

  sendNotification({ email, name, reason, location, count }) {
    const requestId = this.requests.add({
      email,
      name,
      reason,
      location,
      count
    });
    const blocks = this.getNotificationBlocks(requestId);

    this.webClient.chat.postMessage({
      channel: this.config.channel,
      link_names: true,
      blocks: blocks
    });
  }
}

module.exports = SlackAdapter;
