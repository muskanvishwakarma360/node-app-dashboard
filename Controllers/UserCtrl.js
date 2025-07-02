const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const generateToken = require('../Middleware/GenerateToken');


const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'user already exist' })
        const hashedPassword = await bcrypt.hash(password, 10);
        const createUser = await User.create({ name, email, password: hashedPassword, role })
        res.status(201).json({ message: "user successfully registered ", createUser })
    }
    catch (err) {
        console.error("user registration err ", err);
        res.status(500).json({ error: "Failed to user registration" });
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "user not found" });
        console.log('user data', user)
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'password Invalid ' })
        const token = generateToken({ id: user._id, email: user.email, role: user.role });
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 * 24
        });
        res.status(200).json({ message: 'user login successfully', token, user })

    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Login failed" })
    }
}


const getUser = async (req, res) => {
    try {
        const userdata = await User.find()
        res.status(200).json(userdata)
    }
    catch(err) {
        console.error("traffic get err", err);
        res.status(500).json({ error: "Failed to find leads" });
    }
};


module.exports = { registerUser, loginUser, getUser };
