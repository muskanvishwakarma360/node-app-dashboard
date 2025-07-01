const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        index: true
    },
    phone:{
        type: String,
        required: true,
        unique: true
    },
    source: {
        type: String,
        enum: ["Organic", "Facebook Ads", "Google Ads", "Referral", "Email"],
        default:"New"
    },
    status:{
        type: String,
        enum: ["New", "Contacted", "Converted","Lost" ],
        required: true,
    },
    createdAt:{ 
        type: Date,
        default: Date.now,
        index: true
    }
},
{
    timestamps: true
});


module.exports = mongoose.model("Lead", LeadSchema);













