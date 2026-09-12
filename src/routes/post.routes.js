const express = require("express");
const { createPostController, getPostsController } = require("../controllers/post.controller");
const upload = require("../config/multer.config");

const postRouter = express.Router();

postRouter.post("/", upload.single("image"), createPostController);
postRouter.get("/",getPostsController);

module.exports = postRouter;