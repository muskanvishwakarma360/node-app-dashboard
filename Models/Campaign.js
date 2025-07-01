const mongoose = require('mongoose');

const CampaignsSchema =  new mongoose.Schema({
    plateform: {
        type: String,
        enum:["Google Ads", "Facebook Ads", "Instagram Ads"],
        required: true
    },
    campaignName:{
        type: String,
        required: true,
        trim:true
    },
    impressions: Number,
    clicks: Number,
    ctr:Number,
    conversions: Number,
    cost: Number,
    startDate: Date, endDate: Date
},
{
    timestamps: true
});

CampaignsSchema.index({campaignName:1, plateform: 1}, { unique: true });

module.exports = mongoose.model("Campaign", CampaignsSchema);
