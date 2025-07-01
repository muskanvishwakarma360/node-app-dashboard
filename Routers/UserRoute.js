const express = require('express');
const { registerUser, loginUser } = require('../Controllers/UserCtrl');
const verifyToken = require('../Middleware/VerifyToken');
const checkRole = require('../Middleware/RoleVerify');
const userRouter = express.Router();

userRouter.post('/registeruser', registerUser);
userRouter.post('/loginuser', loginUser);
userRouter.get('/getdata', verifyToken, checkRole(['admin', 'viewer']), (req, res) => {
        res.send('verify token ')
});

module.exports = userRouter;

