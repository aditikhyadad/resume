const mongoose = require('mongoose');


var Patients =mongoose.model('Patients',{
    registrationno: {type: Number},
    dateofregistration: {type: Date},
    name: {type: String},
    address: {type: String},
    taluk: {type: String},
    district: {type: String},
    state: {type: String},
    homephone:{type: Number},
    telephone:{type: Number},
    sex: {type: String},
    age:{type: Number},
    dateofbirth:{type: Date},
    religion: {type: String},
    community: {type: String},
    educationqualification: {type: String},
    occupation: {type: String},
    income:{type: Number},
    maritalstatus: {type: String},
    livingarrangements: {type: String},
    nameoffamilymem: {type: String},
    nameofsupperson: {type: String},
    suppersonaddress: {type: String},
    suppersonteleno:{type: Number},
    referral: {type: String}

});

module.exports = {Patients};