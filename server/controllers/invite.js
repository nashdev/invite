const { check, validationResult } = require("express-validator/check");

class InviteController {
  constructor({ slackAdapter, beforeMiddleware }) {
    this.beforeMiddleware = beforeMiddleware;
    this.slack = slackAdapter;

    this.validateCreate = [
      check("email")
        .isEmail()
        .withMessage("Please enter a valid e-mail address."),
      check("name")
        .isLength({ min: 1 })
        .withMessage("Your full name is required.")
    ];

    this.create = this.create.bind(this);
  }

  async create(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      const { email, name } = req.body;
      const ip = this.slack.getIp(req);
      const location = await this.slack.getLocation(ip);
      const count = this.slack.incrementRequestCount(ip);

      this.slack.sendNotification({ email, name, ip, location, count });

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
