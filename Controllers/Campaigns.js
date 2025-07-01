const Campaign = require('../Models/Campaign');

const createCampaigns = async (req, res) => {
    try {
        const { plateform, campaignName, impressions, clicks, ctr, conversion, cost, startDate, endDate} = req.body;
        const campaings = await Campaign.create({plateform, campaignName, impressions, clicks, ctr, conversion, cost, startDate, endDate})
        res.status(201).json(campaings)
    }
    catch (err) {
        console.error("campaings created ", err);
        res.status(500).json({ error: "Failed to create campaings" });
    }
};

const getCompaigns = async (req, res) => {
    try {
        const campaings = await Campaign.find().select('campaignName clicks conversions cost');
        res.status(200).json(campaings)
    }
    catch (err) {
        console.error("campaings get ", err);
        res.status(500).json({ error: "Failed to find campaings" });
    }
};


module.exports = {createCampaigns, getCompaigns}