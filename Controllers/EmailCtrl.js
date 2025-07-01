const EmailCampaign = require('../Models/EmailCampaign');

const createEmailCampaigns = async (req, res) => {
    try {
        const { subject,sentAt, recipients, openRate, clickThroughRate, bounces, unsubcribes, campaignId } = req.body;
        const emailCampaings = await EmailCampaign.create({subject,sentAt, recipients, openRate, clickThroughRate, bounces, unsubcribes, campaignId})
        res.status(201).json(emailCampaings)
    }
    catch (err) {
        console.error("lead created ", err);
        res.status(500).json({ error: "Failed to create lead" });
    }
};

const getEmailCompaigns = async (req, res) => {
    try {
        const emailCampaings = await EmailCampaign.find().select('subject openRate');
        res.status(200).json(emailCampaings)
    }
    catch (err) {
        console.error("lead created ", err);
        res.status(500).json({ error: "Failed to find leads" });
    }
};


module.exports = {createEmailCampaigns, getEmailCompaigns}