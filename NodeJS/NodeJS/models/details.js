const mongoose = require('mongoose');

var Details = mongoose.model('details', {
        fname: {type: String},
        fage: {type: Number},
        foccupation: {type: String},
        fincome: {type: Number},
        fdReason: {type: String},
        fdAge: {type: Number},
        mname: {type: String},
        mage: {type: Number},
        moccupation: {type: String},
        mincome: {type: Number},
        mdReason: {type: String},
        mdAge: {type: Number}
});

module.exports = {Details};