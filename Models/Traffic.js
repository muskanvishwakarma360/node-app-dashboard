const mongoose = require('mongoose');

const TrafficSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        index: true
    },
    visitors: {
        type: Number,
        required: true,
    },
    sessions: {
        type: Number,
        required: true,
    },
    bounceRate: {
        type: Number,
        required: true
    },
    avgSessionDuration: {
        type: Number,
        required: true
    },
    source: {
        type: String,
        enum: ["Organic", "Facebook Ads", "Google Ads", "Referral", "Email"],
        required: true
    }
});


module.exports = mongoose.model("Traffic", TrafficSchema);
