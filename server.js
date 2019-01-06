const express = require("express");
const next = require("next");
const fetch = require("isomorphic-unfetch");
const { WebClient } = require("@slack/client");
const bodyParser = require("body-parser");
const { createMessageAdapter } = require("@slack/interactive-messages");
const { check, validationResult } = require("express-validator/check");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const slackInteractions = createMessageAdapter(
  process.env.SLACK_SIGNING_SECRET
);

const inviteToken = process.env.SLACK_INVITE_TOKEN;
const slackClient = new WebClient(process.env.SLACK_BOT_TOKEN);
const channel = process.env.SLACK_INVITE_CHANNEL;

function getIp(req) {
  const ipAddr = req.headers["x-forwarded-for"];

  if (ipAddr) {
    const list = ipAddr.split(",");
    return list[list.length - 1];
  }
  return req.connection.remoteAddress;
}

async function invite(email) {
  // Manually request an invite over rest api as the Webclient doesn't
  // have the scope to make an invite request.
  // Legacy token is required.
  const req = await fetch(
    `https://nashdev.slack.com/api/users.admin.invite?token=${inviteToken}&email=${email}`
  );

  const { ok, error: providedError, needed } = await req.json();

  if (!ok) {
    if (providedError === "not_authed" || providedError === "invalid_auth") {
      throw new Error("Missing authentication.");
    } else if (providedError === "missing_scope" && needed === "admin") {
      throw new Error(
        `Missing admin scope: The token you provided is for an account that is not an admin. You must provide a token from an admin account in order to invite users through the Slack API.`
      );
    } else if (providedError === "already_invited") {
      throw new Error(
        "User has already been invited to Slack. Delete their invite and manually send again if problem persists."
      );
    } else if (providedError === "already_in_team") {
      throw new Error(`User is already already a member of Nashdev!`);
    } else {
      throw new Error(providedError);
    }
  }
}

app.prepare().then(() => {
  const server = express();
  const jsonParse = bodyParser.json();

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.use("/api/slack/actions", slackInteractions.expressMiddleware());

  slackInteractions.action("invite_user", async (payload, respond) => {
    const [action] = payload.actions;
    const { value } = action;
    const { name, email } = JSON.parse(value);

    if (action.name === "approve") {
      try {
        await invite(email);

        return { text: `Ok we've sent ${name} <${email}> an invite.` };
      } catch (error) {
        return {
          text: `There was a problem sending ${name} <${email}> an invite. ${error}`
        };
      }
    } else {
      return {
        text: `Ok, we've declined ${name} <${email}>'s invite for now.`
      };
    }
  });

  server.post(
    "/api/invite",
    jsonParse,
    [
      check("email")
        .isEmail()
        .withMessage("Please enter a valid e-mail address."),
      check("name")
        .isLength({ min: 1 })
        .withMessage("Your full name is required.")
    ],
    async (req, res) => {
      try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }

        const { email, name } = req.body;

        slackClient.chat.postMessage({
          channel: channel,
          link_names: true,
          text: ``,
          attachments: JSON.stringify([
            {
              callback_id: "invite_user",
              attachment_type: "default",
              title: "New automatic invite request",
              text: `A user at ${getIp(
                req
              )} has requested an invite to join the NashDev Slack team.`,
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

        res.json({
          status:
            "You've successfully submitted your invite request. We'll approve your request as soon as possible.",
          error: false
        });
      } catch (error) {
        res.json({
          status: "error",
          error: error.message
        });
      }
    }
  );

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
