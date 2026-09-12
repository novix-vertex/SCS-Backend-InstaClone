const imagekit = require("../config/imagekit.config");
const jwt = require("jsonwebtoken");
const postModel = require("../models/post.model");

const createPostController = async (req, res) => {

    const file = req.file;
    const { caption } = req.body;
    const uploadedFile = await imagekit.upload({
        file: file.buffer,
        fileName: file.originalname,
        folder: 'uploads'
    });

    const post = await postModel.create({
        caption,
        imgUrl: uploadedFile.url,
        user: req.user.id
    });

    return res.status(201).json({
        message: "post created successfully",
        post
    });

}

const getPostsController = async (req, res) => {

    const posts = await postModel.find({ user: req.user.id });

    return res.status(200).json({
        message: "Posts fetched successfully.",
        posts
    })
}

const getPostDetailController = async (req, res) => {

    const postId = req.params.postId;

    const post = await postModel.findById(postId);
    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        })
    }

    const isAuthorized = post.user.toString() === req.user.id;

    if (!isAuthorized) {
        return res.status(403).json({
            message: "You're not authorized to access this post content."
        })
    }

    return res.status(200).json({
        message: "Post details fetched successfully.",
        post
    })
}



module.exports = {
    createPostController,
    getPostsController,
    getPostDetailController
}