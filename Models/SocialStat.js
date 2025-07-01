const mongoose = require("mongoose");


const SocialStatsSchema = new mongoose.Schema({
    plateform: {
        type: String,
        enum: ["Instagram", "Facebook", "LinkedIn", "Twitter" ],
        required: true
    },
    date:{
        type: Date, required:true, index:true
    },
    followers: Number,
    likes: Number,
    comments:Number,
    shares:Number,
    reach: Number
});

SocialStatsSchema.index({plateform: 1, date:-1});

module.exports= mongoose.model("SocialStat", SocialStatsSchema);