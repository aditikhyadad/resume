const mongoose = require('mongoose');

var LegalHistory = mongoose.model('LegalHistory', {

    saleofdrugs:{type: Number},
    possessionofdrugs:{type: Number},
    arrestedfordrunkenbehaviour:{type: Number},
    finedfordrunkendriving:{type: Number},
    accindentunderinfluence:{type: Number},
    assault:{type: Number},
    anyother:{type:Number}
});

module.exports = {LegalHistory};