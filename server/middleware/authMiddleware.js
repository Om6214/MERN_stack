const jwt = require("jsonwebtoken");
const User = require("../model/user_model");

const authMiddleware = async(req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ msg: "unauthorized token,token not provided" });
  }

  const jwtToken = token.replace("Bearer", "").trim();
  
  try {
    const isVerified = jwt.verify(jwtToken,process.env.secretKey)
    const userData = await User.findOne({Email:isVerified.Email}).select({Password:0})
    req.user=userData;
    req.Token = token;
    req.userId = userData._id
    next();
  } 
  catch (error) {
    res.status(400).json(401)
        .json({ msg: "unauthorized token,token not provided" })
  }
};

module.exports = authMiddleware;
