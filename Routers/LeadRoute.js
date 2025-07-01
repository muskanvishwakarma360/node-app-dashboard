const express = require("express");
const { createLead, getLeads } = require("../Controllers/LeadCtrl");
const leadRouter = express.Router();


leadRouter.post("/leads",createLead );
leadRouter.get("/leads", getLeads);

module.exports = leadRouter;
