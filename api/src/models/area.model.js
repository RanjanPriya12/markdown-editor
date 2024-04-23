const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
    country: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
    weeklyOffOn: { type: String, required: true, default: "sunday" },
    currencySymbol: { type: String, required: true }
},
{
    timestamps: true,
    versionKey: false
});

const Area = new mongoose.model('area', areaSchema);
module.exports = Area;