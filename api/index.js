const express = require('express');
const connectDB = require('./src/configs/db');
const companyRoute = require("./src/routes/company.route");
const userRoute = require("./src/routes/user.route");
const app = express();
require('dotenv').config();

app.use(express.json());
app.use('/api/v1/make-it-easy/company', companyRoute);
app.use('/api/v1/make-it-easy', userRoute);
const port = process.env.PORT || 5000;

app.listen(port, async () => {
    try {
        await connectDB();
        console.log(`application is listening at port http://localhost:${port}`);
    } catch (error) {
        console.log('error', error);
        throw error;
    }
});