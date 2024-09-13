const { check } = require("express-validator");
const { isValidObjectId } = require("mongoose");

exports.authValidator = {
  REGISTER: [
    check("username", "User Name is the required field").isString().notEmpty(),
    check("email", "Email is the required field").isEmail().notEmpty(),
    check("password", "Password is the required field").isString().notEmpty(),
  ],
  LOGIN: [
    check("email", "Email is the required field").isEmail().notEmpty(),
    check("password", "Password is the required field").isString().notEmpty(),
  ],
  FORGOT_PASSWORD: [
    check("id", "Id is the required field")
      .isString()
      .notEmpty()
      .custom((value) => {
        if (!isValidObjectId(value)) {
          throw new Error("Invalid Object Id");
        }
        return true;
      }),
    check("password", "Password is the required field").isString().notEmpty(),
  ],
  FORGOT_PASSWORD_REQUEST: [
    check("email", "Email is the required field").isEmail().notEmpty(),
  ],
};