const dns = require("dns").promises;
const fetch = require("isomorphic-unfetch");
const { WebClient } = require("@slack/client");
const { createMessageAdapter } = require("@slack/interactive-messages");

class SlackAdapter {
  constructor() {
    this.requestCountByIp = {};
    this.config = {
      org: process.env.SLACK_ORG,
      inviteToken: process.env.SLACK_INVITE_TOKEN,
      channel: process.env.SLACK_INVITE_CHANNEL
    };
    this.webClient = new WebClient(process.env.SLACK_BOT_TOKEN);
    this.adapter = createMessageAdapter(process.env.SLACK_SIGNING_SECRET);
    this.adapter.action("invite_user", this.handleInvite.bind(this));
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
      console.error("Locatio Error:", error);
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
        throw new Error(`User is already already a member of Nashdev!`);
      } else {
        throw new Error(error);
      }
    }
  }

  async handleInvite({ user, actions }) {
    const [action] = actions;
    const { value } = action;
    const { name, email } = JSON.parse(value);

    if (action.name === "approve") {
      try {
        await this.invite(email);

        return {
          text: `✅ Ok, we've sent ${name} <${email}> an invite. (Approved by <@${
            user.id
          }>)`
        };
      } catch (error) {
        return {
          text: `There was a problem sending ${name} <${email}> an invite. (Attempted by <@${
            user.id
          }>) ${error}  `
        };
      }
    } else {
      return {
        text: `Ok, we've declined ${name} <${email}>'s invite for now. (Declined by <@${
          user.id
        }>)`
      };
    }
  }

  sendNotification({ email, name, reason, location, count }) {
    const ip = location.ip;
    const loc = `${location.city}, ${location.region} — ${location.country}`;

    this.webClient.chat.postMessage({
      channel: this.config.channel,
      link_names: true,
      text: ``,
      attachments: JSON.stringify([
        {
          callback_id: "invite_user",
          attachment_type: "default",
          title: "New automatic invite request",
          text: `A user at ${ip} — ${loc} (${count} requests) has requested an invite to join the NashDev Slack team.`,
          color: "#74c8ed",
          fields: [
            {
              title: "Name",
              value: name,
              short: true
            },
            {
              title: "Email",
              value: email,
              short: true
            },

            {
              title: "Reason",
              value: reason ? reason : "N/A"
            }
          ],
          actions: [
            {
              name: "approve",
              type: "button",
              text: `Approve`,
              value: JSON.stringify({ name, email }),
              style: "primary"
            },
            {
              name: "decline",
              type: "button",
              text: `Decline`,
              value: JSON.stringify({ name, email })
            }
          ]
        }
      ])
    });
  }
}

module.exports = SlackAdapter;
