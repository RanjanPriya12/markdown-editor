const express = require("express");
const { registerValidation } = require("../validations/user.validation");
const userController = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.route("/register").post(registerValidation, userController.register);
userRoute.route("/login").post(userController.login);

module.exports = userRoute;