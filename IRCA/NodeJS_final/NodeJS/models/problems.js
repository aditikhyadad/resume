const mongoose = require('mongoose');

var Problems = mongoose.model('problems', {
    depression : {type : String},
    suicide : {type : String},
    psychiatric : {type :String},
    alcohol : {type: String},
    drug : {type :String}
});

module.exports = {Problems};