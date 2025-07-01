const mongoose = require("mongoose");
require('dotenv').config();

const connection = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL)
    } catch (err) {
        console.error("connection err", err)
    }
}

module.exports = connection;
