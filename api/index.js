const express = require('express');
const connectDB = require('./src/configs/db');
const app = express();
require('dotenv').config();

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