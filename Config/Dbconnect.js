const mongoose = require("mongoose");
require('dotenv').config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tls: true 
    });

    console.log("mongoDB connected successfully");
  } catch (err) {
    console.error("mongoDB connection error:", err);
    process.exit(1); 
  }
};

module.exports = connection;
