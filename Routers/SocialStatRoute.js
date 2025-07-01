const express = require("express"); 

const { createSocialStat, getSocialStat } = require("../Controllers/SocialStatCtrl");
const socialStatRouter = express.Router();


socialStatRouter.post("/socialstat",createSocialStat );
socialStatRouter.get("/socialstat", getSocialStat);

module.exports = socialStatRouter;

