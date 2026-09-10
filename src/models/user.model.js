const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bio:{
        type:String
    },
    avtar:{
        type:String,
        default:"https://ik.imagekit.io/qvragpjpxk/avtar.png"
    }
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;