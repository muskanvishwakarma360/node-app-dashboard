const express = require("express");
const { createCampaigns, getCompaigns } = require("../Controllers/Campaigns");
const campaignRouter = express.Router();


campaignRouter.post("/campaigns",createCampaigns );
campaignRouter.get("/campaigns", getCompaigns);

module.exports = campaignRouter;
