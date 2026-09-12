const express = require("express");
const { createPostController, getPostsController, getPostDetailController } = require("../controllers/post.controller");
const upload = require("../config/multer.config");
const identifyUser = require("../middlewares/auth.middleware");

const postRouter = express.Router();

postRouter.post("/", upload.single("image"), identifyUser, createPostController);
postRouter.get("/", identifyUser, getPostsController);
postRouter.get("/details/:postId", identifyUser, getPostDetailController);

module.exports = postRouter;