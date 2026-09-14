const express = require("express");
const { followUserController } = require("../controllers/user.controller");
const identifyUser = require("../middlewares/auth.middleware");

const userRouter = express.Router();

/**
 * @route POST /api/users/follow/:userId
 * @description Used to follow a user
 * @access Private
 */
userRouter.post("/follow/:username", identifyUser, followUserController);



module.exports = userRouter;