const { check, validationResult } = require("express-validator/check");

class InviteController {
  constructor({ slackAdapter, beforeMiddleware }) {
    this.before = beforeMiddleware;
    this.slack = slackAdapter;

    this.validate = [
      check("email")
        .isEmail()
        .withMessage("Please enter a valid e-mail address."),
      check("name")
        .isLength({ min: 1 })
        .withMessage("Your full name is required.")
    ];

    this.handle = this.handle.bind(this);
  }

  async handle(req, res) {
    try {
      const errors = validationResult(req);
      const ip = this.slack.getIp(req);
      const count = this.slack.incrementRequestCount(ip);
      const { email, name } = req.body;

      console.log(`Request count for ip ${ip}: ${count}`);

      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      this.slack.sendNotification({ email, name, ip, count });

      res.json({
        status:
          "You've successfully submitted your invite request. We'll approve your request as soon as possible. Be on the lookout for an email from feedback@slack.com.",
        error: false
      });
    } catch (error) {
      res.json({
        status: "error",
        error: error.message
      });
    }
  }
}

module.exports = InviteController;
