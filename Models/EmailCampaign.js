const mongoose = require("mongoose");

const EmailCampaignSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  sentAt: {
    type: Date,
    required: true
  },
  recipients: {
    type: Number,
    required: true
  },
  openRate: Number,
  clickThroughRate: Number,
  bounces: Number,
  unsubscribes: Number,
  campaignId: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("EmailCampaign", EmailCampaignSchema);
