const mongoose = require('mongoose');

var Comment = mongoose.model('comments', {
    mild : {type : String},
    moderate : {type : String},
    severe : {type :String}
});

module.exports = {Comment};