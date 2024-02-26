const jwt = require('jsonwebtoken');
const { login } = require('../model/auth.model');
const axios = require('axios');
const https = require('https');

const SECRET_KEY = process.env.SECRET_KEY;

// Login to otsuka API
const loginAPI = async (username, password) => {
    let res = await axios.post(
        process.env.AUTH_URL,
        {username, password},
        {httpsAgent: new https.Agent({rejectUnauthorized: false})}
    ).catch(error => console.info(error));

    if (res.status) {
        return res.data;
    } else {
        return false;
    }
}

const generateToken = userData => {
    return jwt.sign(
      {
        userInfo: {
          username: userData.user_name,
          permission: userData.permission,
        },
      },
      SECRET_KEY,
      { expiresIn: "24h" }
    );
};

const verifyToken = (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({error: "No token provided!"});
    }

    jwt.verify(token, SECRET_KEY, (error, decode) => {
        if (error) {
            console.info(error);
            return res.status(403).json({error: "Failed to authenticate token"});
        }

        req.user = decode.userInfo.username;
        req.permission = decode.userInfo.permission;
        req.data = decode.userInfo
        next();
    });
}

const hasAccess = (...allowedPermission) => {
    return (req, res, next) => {
        if (!req?.permission) return res.status(401).json({message: "Something wrong"});
        const permissionArray = [...allowedPermission];
        const result = permissionArray.find(permission => req.permission == permission);
        if (!result) return res.status(401).json({message: "Permission doesn't match", data: req.data});
        next();
    }
}

module.exports = {
  generateToken,
  verifyToken,
  loginAPI,
  hasAccess,
};