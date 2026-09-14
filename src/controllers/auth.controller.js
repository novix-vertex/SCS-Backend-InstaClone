const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const loginController = async (req, res) => {

    const { username, email, password } = req.body;
    const user = await userModel.findOne({
        $or: [
            { email },
            { username }
        ]
    });

    console.log(user);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    // const hash = crypto.createHash("sha256").update(password).digest("hex");
    //   const isPasswordCorrect = user.password === hash;

    //now will use bcryptjs lib to generate hash

    const isPasswordValid = bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid Credentials"
        })
    }

    const token = jwt.sign({
        id: user._id,
        username: user.username
    }, process.env.JWT_SECRET, { expiresIn: "1hr" });

    res.cookie("token", token);

    res.status(200).json({
        message: "User logged in successfully.",
        data: {
            user: {
                name: user.name,
                email: user.email,
                username: user.username,
                bio: user.bio,
                avtar: user.avtar
            }
        }
    })
};

const registerController = async (req, res) => {
    const { name, username, email, password, bio, avtar } = req.body;

    const isUserExists = await userModel.findOne({
        $or: [
            { email },
            { username }
        ]
    });

    if (isUserExists) {
        return res.status(409).json({
            message: "User already exists using with this email/username."
        })
    }

    //const hash = crypto.createHash("sha256").update(password).digest("hex");

    //now will use bcryptjs lib to generate hash
    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        name,
        username,
        email,
        bio,
        avtar,
        password: hash
    });

    const token = jwt.sign({
        id: user._id,
        username: user.username
    }, process.env.JWT_SECRET, { expiresIn: "1hr" });

    res.cookie("token", token);

    res.status(201).json({
        message: "User has been registered successfully.",
        data: {
            user: {
                name: user.name,
                email: user.email,
                username: user.username,
                bio: user.bio,
                avtar: user.avtar
            }
        }
    })
};

module.exports = {
    loginController,
    registerController
}