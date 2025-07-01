const jwt = require("jsonwebtoken");

const generateToken = ({ id, email, role }) => {
    try {
        const token = jwt.sign({ id, email, role }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
        return token
    } catch (err) {
        console.log('err', err)
        return null;
    }
};


module.exports = generateToken;