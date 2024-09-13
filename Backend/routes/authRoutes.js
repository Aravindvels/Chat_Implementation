const express = require("express");
const {
  register,
  login,
  forgotPassword,
  userMe,
  forgotPasswordRequest,
} = require("../controllers/authController");
const { validator } = require("../validator");
const { authValidator } = require("../validator/authValidator");
const router = express.Router();

router.post("/register", authValidator.REGISTER, validator, register);
router.post("/login", authValidator.LOGIN, validator, login);
router.post(
  "/forgot-password",
  authValidator.FORGOT_PASSWORD,
  validator,
  forgotPassword
);
router.post(
  "/forgot-password-request",
  authValidator.FORGOT_PASSWORD_REQUEST,
  validator,
  forgotPasswordRequest
);
router.get("/user", userMe);

module.exports = router;
