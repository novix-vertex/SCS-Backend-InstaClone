const imagekit = require("../config/imagekit.config");
const jwt = require("jsonwebtoken");
const postModel = require("../models/post.model");

const createPostController = async (req, res) => {

    const file = req.file;
    const { caption } = req.body;
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Token not found! Unauthorized access"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const uploadedFile = await imagekit.upload({
            file: file.buffer,
            fileName: file.originalname,
            folder: 'uploads'
        });

        const post = await postModel.create({
            caption,
            imgUrl: uploadedFile.url,
            user: decoded.id
        });

        res.status(201).json({
            message: "post created successfully",
            post
        });

    } catch (error) {
        return res.status(401).json({
            message: "Token not matched! Unauthorized access"
        })
    }

}

const getPostsController = async (req, res) => {

    const token = req.cookies.token;
    console.log(token);
    if (!token) {
        return res.status(401).json({
            message: "Token not found! Unauthorized Access"
        });
    }

    try {
        console.log("token",token);
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decode",decode);
            
            const posts = await postModel.find({ user: decode.id });
            console.log("post",posts);

        res.status(200).json({
            message: "Posts fetched successfully.",
            posts
        })
    } catch (error) {
        return res.status(401).json({
            message: "Token Mismatch! Unauthorized Access"
        })
    }
}



module.exports = {
    createPostController,
    getPostsController
}