const Traffic = require('../Models/Traffic');

const createTraffic = async (req, res) => {
    try {
        const { date, visitors , sessions , bounceRate, avgSessionDuration, source } = req.body;
        const traffic = await Traffic.create({ date, visitors , sessions , bounceRate, avgSessionDuration, source })
        res.status(201).json(traffic)
    }
    catch (err) {
        console.error("traffic created err ", err);
        res.status(500).json({ error: "Failed to create traffic" });
    }
};

const getTraffic = async (req, res) => {
    try {
        const traffic = await Traffic.find().sort({ date: 1 }).select('date visitors');
        res.status(200).json(traffic)
    }
    catch(err) {
        console.error("traffic get err", err);
        res.status(500).json({ error: "Failed to find leads" });
    }
};


module.exports = {createTraffic, getTraffic}