const mongoose = require('mongoose');

const designationSchema = new mongoose.Schema({
    designation: { type: String, required: true },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'company' },
    fullName: { type: String, required: true},
    designationLevel: { type: Number, required: true }
},
{
    timestamps: true,
    versionKey: false
});

const Designation = new mongoose.model('designation', designationSchema);
module.exports = Designation;