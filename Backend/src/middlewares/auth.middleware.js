const jwt = require("jsonwebtoken");

const identifyUser = async (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Token not found! Unauthorized Access"
        })
    }

    let decoded = null;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized Access"
        })
    }

    req.user = decoded;
    next(); //necessary to call in middleware so that it passes control to further flow to controller.
}

module.exports = identifyUser;