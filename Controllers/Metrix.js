const Lead = require('../Models/Lead');
const Conversion = require('../Models/Conversion');
const Campaign = require('../Models/Campaign');

const getMetrixData = async (req, res) => {
  try {
    const [totalLeads, totalConversions, campaigns] = await Promise.all([
      Lead.countDocuments(),
      Conversion.countDocuments(),
      Campaign.find()
    ]);

    const totalSpend = campaigns.reduce((sum, campaign) => sum + (campaign.cost || 0), 0);
    const avgCtr = campaigns.length
      ? (campaigns.reduce((sum, campaign) => sum + (campaign.ctr || 0), 0) / campaigns.length).toFixed(2)
      : '0.00';

    res.json({ totalLeads, totalConversions, totalSpend, avgCtr });
  } catch (err) {
    console.error('error fetching metrics data:', err);
    res.status(500).json({ error: 'internal server error' });
  }
}

module.exports = getMetrixData;
