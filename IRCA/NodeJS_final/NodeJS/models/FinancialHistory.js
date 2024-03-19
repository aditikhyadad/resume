const mongoose = require('mongoose');

var FinHistory = mongoose.model('financial', {

    family_friends:{type: Number},
    banks:{type: Number},
    workplace:{type: Number},
    lenders:{type: Number},
    pawnshops:{type: Number},
    othershops:{type: Number},
    mild:{type: String},
    moderate:{type: String},
    severe:{type: String}
});

module.exports = {FinHistory};
