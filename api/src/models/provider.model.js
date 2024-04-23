const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
    stateId: { type: mongoose.Schema.Types.ObjectId, ref: 'state' },
    districtId:{ type: mongoose.Schema.Types.ObjectId, ref: 'district' },
    blockId:{ type: mongoose.Schema.Types.ObjectId, ref: 'area' },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'company' },
    userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    submitBy:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    providerType:{ type: String, required:true },
    providerName:{ type: String, required:true },
    providerCode:{ type: String, required:true },
    category:{ type: String, required:true },
    frequencyVisit:{ type: Number, required:true },
    doa:{ type: Date, required:false },
    dob:{ type: Date, required:false },
    degree:{ type: String, required:true },
    specialization:{ type: String, required:true },
    city:{ type: String, required:false },
    blockName:{ type: String, required:false },
    businessPotential:{ type: Number, required:false },
    address:{ type: String, required:false },
    status:{ type: Boolean, required:true,default:true },
    appStatus:{ type: String, required:true,default:'approved' },
    mgrAppDate:{ type: Date, required:false },
    finalAppDate:{ type: Date, required:false },
    appByMgr:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    finalAppBy:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    delStatus: { type: String, required: false },
    delByMgr:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    finalDelBy:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    mgrDelDate:{ type: Date, required:false },
    finalDelDate:{ type: Date, required:false },
    aadhar:{ type: String, required: false,minLength:12,maxLength:12 },
    mobile:{ type: String, required: false },
    designationLevel:{ type: Number, required: false },
    isDoctorOtherInfo:{ type: Boolean, required: false },
    updated:{ type: Boolean, required: false },
    rejectDelStatus:{ type: Boolean, required: false },
    rejectAddStatus:{ type: Boolean, required: false },
    onLocation:{ type: Boolean, required: false },
    geoLocation:{type:[]}
},
{
    timestamps: true,
    versionKey: false
});

const Provider = new mongoose.model('provider', providerSchema);
module.exports = Provider;