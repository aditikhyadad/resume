const mongoose = require('mongoose');

var Sibling = mongoose.model('siblings', {
    relationship: {type: String},
    age: {type: Number},
    education: {type: String},
    occupation: {type: String}
});

module.exports = {Sibling};