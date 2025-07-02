const Conversion = require('../Models/Conversion');

const createConversion = async (req, res) => {
    try {
        const { lead , convertedAt, campaign, convertedBy } = req.body;
        const conversion = await Conversion.create({ lead , convertedAt, campaign, convertedBy })
        res.status(201).json(conversion)
    }
    catch (err) {
        console.error("conversion created err ", err.message);
        res.status(500).json({ error: "Failed to create conversion" });
    }
};

const getConversion = async (req, res) => {
    try {
        const conversion = await Conversion.find({})
        res.status(200).json(conversion)
    }
    catch (err) {
        console.error("conversion get err", err);
        res.status(500).json({ error: "Failed to find conversion" });
    }
};


module.exports = {createConversion, getConversion}