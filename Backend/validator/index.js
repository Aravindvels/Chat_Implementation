const { validationResult } = require("express-validator");

exports.validator = (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({
      message: "Incorrect Payload",
      errors,
    });
  } else {
    next();
  }
};
