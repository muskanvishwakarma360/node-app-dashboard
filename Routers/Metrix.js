const express = require('express');
const getMetrixData = require('../Controllers/Metrix');
const metrixRouter = express.Router();

metrixRouter.get('/overview',getMetrixData);
module.exports = metrixRouter;
