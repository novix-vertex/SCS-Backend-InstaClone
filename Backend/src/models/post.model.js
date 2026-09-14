const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({

    caption:{
        type:String,
        default:""
    },
    imgUrl:{
        type:String,
        required:[true,"image is mandatory for a post"]
    },
    user:{
        ref:"users",
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"user id is required to for a post"]
    }
});

const postModel = mongoose.model("posts",postSchema);

module.exports = postModel;


