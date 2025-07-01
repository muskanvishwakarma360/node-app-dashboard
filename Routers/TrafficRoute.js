const express = require('express');
const { createTraffic, getTraffic } = require('../Controllers/TrafficStat');
const trafficRouter = express.Router();

trafficRouter.post('/traffic', createTraffic);
trafficRouter.get('/traffic', getTraffic);

module.exports = trafficRouter;

