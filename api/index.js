const express = require('express');
const connectDB = require('./src/configs/db');
const companyRoute = require("./src/routes/company.route");
const userRoute = require("./src/routes/user.route");
const stateRoute = require("./src/routes/state.route");
const countryRoute = require("./src/routes/country.route");
const divisionRoute = require("./src/routes/division.route");
const districtRoute = require("./src/routes/district.route");
const cors = require('cors')
const app = express();

require('dotenv').config();


const corsOptions = {
    origin: ['http://localhost:4200'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-access-token'], 
};


app.use(cors(corsOptions));

app.use(express.json());
app.use('/api/v1/make-it-easy/company', companyRoute);
app.use('/api/v1/make-it-easy', userRoute);
app.use('/api/v1/make-it-easy', stateRoute);
app.use('/api/v1/make-it-easy', countryRoute);
app.use('/api/v1/make-it-easy', divisionRoute);
app.use('/api/v1/make-it-easy', districtRoute);
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