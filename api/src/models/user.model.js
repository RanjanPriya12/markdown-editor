const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    status: { type: Boolean, required: true,default:true },
    name:{ type: String, required: true },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'company' },
    age: { type: Number, required: false },
    gender: { type: String, required: true, enum: ["Female", "Male"] },
    address: { type: Number, required: false },
    dateOfBirth: { type: Date, required: false },
    dateOfAnniversary: { type: Date, required: false },
    dateOfJoining: { type: Date, required: false },
    aadhaar: { type: String, required: false, minlength: 12, maxlength: 12 },
    PAN: { type: String, required: false },
    mobile: { type: String, required: false },
    employeeCode: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    divisionId: { type: mongoose.Schema.Types.ObjectId, ref: 'division' },
    divisionName: { type: String, required: false },
    deactivationDate: { type: Date, required: false },
    designation: { type: String, required: true },
    designationLevel: { type: Number, required: true },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    countryId: { type: mongoose.Schema.Types.ObjectId, ref: 'country' },
    lockingPeriod:{ type: Number, required: false },
},
{
    timestamps: true,
    versionKey: false
});

const User = new mongoose.model('user', userSchema);
module.exports = User;
