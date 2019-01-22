const express = require("express");
const helmet = require("helmet");
const next = require("next");
const bodyParser = require("body-parser");
const compression = require("compression");

const SlackAdapter = require("./server/adapters/slack");
const InviteController = require("./server/controllers/invite");

const jsonParse = bodyParser.json();
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  const slack = new SlackAdapter();
  const inviteController = new InviteController({
    slackAdapter: slack,
    beforeMiddleware: [jsonParse]
  });

  server.use(compression());
  server.use(helmet());

  server.get("*", handle);

  server.use("/api/slack/actions", slack.adapter.expressMiddleware());

  server.post(
    "/api/invite",
    inviteController.beforeMiddleware,
    inviteController.validateCreate,
    inviteController.create
  );

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
