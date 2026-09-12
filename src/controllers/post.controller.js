const imagekit = require("../config/imagekit.config");

const createPostController = async (req, res) => {

    const file = req.file;

    const uploadedFile = await imagekit.upload({
        file: file.buffer,
        fileName: file.originalname,
        folder: 'uploads'
    });
    console.log(uploadedFile);
    res.status(201).json({
        message: "image uploaded successfully.",
        imageUrl: uploadedFile.url
    })

}

module.exports = {
    createPostController
}