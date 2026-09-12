const express = require("express");
const { createPostController } = require("../controllers/post.controller");
const upload = require("../config/multer.config");

const postRouter = express.Router();

postRouter.post("/", upload.single("image"), createPostController)

module.exports = postRouter;