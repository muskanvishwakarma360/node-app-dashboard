const express = require('express');
const cors = require('cors');

const leadRouter = require('./Routers/LeadRoute');
const userRouter = require('./Routers/UserRoute');
const connection = require('./Config/Dbconnect');
const trafficRouter = require('./Routers/TrafficRoute');
const emailCampaignsRouter = require('./Routers/EmailCmpRoute');
const conversionRoute = require('./Routers/ConversionRoute');
const campaignRouter = require('./Routers/CompaignRoute');
const socialStatRouter = require('./Routers/SocialStatRoute');
const metrixRouter = require('./Routers/Metrix');
const app = express();
const env = require('dotenv').config();

app.use(cors());

app.use(express.json());
app.use('/api', leadRouter);
app.use('/api', userRouter);
app.use('/api', trafficRouter);
app.use('/api', emailCampaignsRouter);
app.use('/api', conversionRoute);
app.use('/api', campaignRouter);
app.use('/api', socialStatRouter);
app.use('/api', metrixRouter)

connection();

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})

