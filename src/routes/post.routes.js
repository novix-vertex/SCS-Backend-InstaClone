const express = require("express");
const { createPostController, getPostsController, getPostDetailController } = require("../controllers/post.controller");
const upload = require("../config/multer.config");

const postRouter = express.Router();

postRouter.post("/", upload.single("image"), createPostController);
postRouter.get("/", getPostsController);
postRouter.get("/details/:postId", getPostDetailController);

module.exports = postRouter;