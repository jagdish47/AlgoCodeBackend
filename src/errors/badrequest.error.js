const BaseError = require("./base.error");
const { statusCode } = require("http-status-codes");

class BadRequest extends BaseError {
  constructor(propertyName, details) {
    super(
      "BadRequest",
      statusCode.BAD_REQUEST,
      `Invalid structure for ${propertyName} provided`,
      details
    );
  }
}

module.exports = BadRequest;
