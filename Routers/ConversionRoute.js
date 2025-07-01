const express = require("express"); 
const { createConversion, getConversion } = require("../Controllers/ConversionCtrl");
const conversionRoute = express.Router();


conversionRoute.post("/conversion",createConversion );
conversionRoute.get("/conversion", getConversion);

module.exports = conversionRoute;

