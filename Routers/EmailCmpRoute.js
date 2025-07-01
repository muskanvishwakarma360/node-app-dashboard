const express = require('express');
const { createEmailCampaigns, getEmailCompaigns } = require('../Controllers/EmailCtrl');

const emailCampaignsRouter = express.Router();


emailCampaignsRouter.post("/emailcampaigns",createEmailCampaigns );
emailCampaignsRouter.get("/emailcampaigns", getEmailCompaigns)

module.exports = emailCampaignsRouter;