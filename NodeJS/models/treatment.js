const mongoose = require('mongoose');

var Treatment = mongoose.model('treatment', {
    year: {type: Date},
    place: {type: String},
    period: {type: Number},
    sobriety: {type: Number},
    reason: {type: String},
    relapse: {type: String}
});

module.exports = {Treatment};