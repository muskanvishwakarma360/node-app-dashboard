const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression')
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

const  limiter = rateLimit({
    windowMs:15*60*1000,
    max:100
});

app.use(helmet())
app.use(cors());
app.use(express.json());
app.use(compression())
app.use(limiter)
connection();

app.use('/api', leadRouter);
app.use('/api', userRouter);
app.use('/api', trafficRouter);
app.use('/api', emailCampaignsRouter);
app.use('/api', conversionRoute);
app.use('/api', campaignRouter);
app.use('/api', socialStatRouter);
app.use('/api', metrixRouter)


const PORT = process.env.PORT;

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server Error' });
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

