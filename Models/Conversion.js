const mongoose = require("mongoose");

const ConversionSchema = new mongoose.Schema({
  lead: { type: mongoose.Schema.Types.ObjectId, ref: "Lead", required: true },
  convertedAt: { type: Date, default: Date.now },
  campaign: { type: String },
  convertedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Conversion", ConversionSchema);
