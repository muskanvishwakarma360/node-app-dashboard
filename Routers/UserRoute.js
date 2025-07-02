const express = require('express');
const { registerUser, loginUser, getUser } = require('../Controllers/UserCtrl');
const verifyToken = require('../Middleware/VerifyToken');
const checkRole = require('../Middleware/RoleVerify');
const userRouter = express.Router();

userRouter.post('/registeruser', registerUser);
userRouter.post('/loginuser', loginUser);
userRouter.get('/getdata', verifyToken, checkRole(['admin', 'viewer']),getUser);

module.exports = userRouter;

