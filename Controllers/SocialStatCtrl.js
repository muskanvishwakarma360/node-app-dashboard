const SocialStat = require('../Models/SocialStat');

const createSocialStat = async (req, res) => {
    try {
        const { plateform, date, followers, likes , comments, shares, reach} = req.body;
        const socialStat = await SocialStat.create({plateform, date, followers, likes , comments, shares, reach })
        res.status(201).json(socialStat)
    }
    catch (err) {
        console.error("lead created ", err);
        res.status(500).json({ error: "Failed to create lead" });
    }
};

const getSocialStat = async (req, res) => {
    try {
        const socialStat = await SocialStat.find().sort({ date: 1 }).select('date plateform followers');
        res.status(200).json(socialStat)
    }
    catch (err) {
        console.error("lead created ", err);
        res.status(500).json({ error: "Failed to find leads" });
    }
};


module.exports = { createSocialStat, getSocialStat }