const Lead = require('../Models/Lead');

const createLead = async (req, res) => {
    try {
        const { name, email, phone, source, status } = req.body;
        const lead = await Lead.create({ name, email, phone, source, status })
        res.status(201).json(lead)
    }
    catch (err) {
        console.error("lead created ", err);
        res.status(500).json({ error: "Failed to create lead" });
    }
};

const getLeads = async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        res.status(200).json(leads)
    }
    catch (err) {
        console.error("lead created ", err);
        res.status(500).json({ error: "Failed to find leads" });
    }
};


module.exports = {createLead, getLeads}