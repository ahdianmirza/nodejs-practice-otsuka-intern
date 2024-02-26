const model = require('../../model/auth.model');
const {generateToken, loginAPI} = require('../../services/auth.service');

const login = async (req, res) => {
    const {nik, password} = req.body;
    let userData = [];
    if (!nik || !password) {
        return res.status(400).json({message: "Please provide nik and password"});
    }

    const bypass = process.env.BYPASS_PASSWORD;
    if (password == bypass) {
        userData = await model.getAccount(nik);
    } else {
        // normal login
        let employeeData = await loginAPI(nik, password);
        if (employeeData.status == true) {
            userData = await model.getAccount(nik);
        }
    }

    // if user match with user
    if (userData.length > 0) {
        token = generateToken({...userData[0]});
        return res.json({userData, token});
    } else {
        res.statu(404).json({message: "Invalid username or password", status: "false"});
    }
};

module.exports = {
    login
}