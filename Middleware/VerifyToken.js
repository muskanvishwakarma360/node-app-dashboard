const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    console.log('token verify', token);
    try{
        const decode  = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decode
        console.log('user', decode)
        next();
    }catch(err){
        console.log(err)
    }

}





module.exports = verifyToken;
