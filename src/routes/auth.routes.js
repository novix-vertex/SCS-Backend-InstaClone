const express = require("express");

const authRouter = express.Router();
const crypto = require("crypto");
const { default: mongoose } = require("mongoose");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { registerController, loginController } = require("../controllers/auth.controller");


authRouter.post("/register", registerController);
authRouter.post("/login", loginController);


module.exports = authRouter;