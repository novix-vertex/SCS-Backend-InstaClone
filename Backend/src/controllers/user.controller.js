const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

const followUserController = async (req, res) => {

    const followerUserName = req.user.username;
    const followeeUserName = req.params.username;

    if(followerUserName === followeeUserName){
        return res.status(400).json({
            message:"You cannot follow yourself."
        })
    }

    const isFolloweeExists = await userModel.findOne({username:followeeUserName});
    if(!isFolloweeExists){
        res.status(400).json({
            message:"There is no such user who you want to follow"
        })
    }

    const isAlreadyFollowing = await followModel.findOne({
        follower:followerUserName,
        followee:followeeUserName
    });

    if(isAlreadyFollowing){
        return res.status(200).json({
            message:`You're already following ${followeeUserName}`
        })
    }
    const followRecord = await followModel.create({
        follower: followerUserName,
        followee: followeeUserName
    });

    res.status(201).json({
        message: `You're now following ${followeeUserName}`,
        follow: followRecord
    })

}

module.exports = {
    followUserController
}