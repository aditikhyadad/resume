const mongoose = require('mongoose');

var Referral = mongoose.model('referrals', {
    dateanddetails:{type:String},
    actiontaken:{type:String},
    referredto:{type:String},
    organisation:{type:String},
});

module.exports = {Referral};