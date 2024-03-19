const mongoose = require('mongoose');

var Individual = mongoose.model('individuals', {
    date:{type:String},
    issues:{type:String},
    date1:{type:String},
    issues1:{type:String},
    date2:{type:String},
    issues2:{type:String},
    date3:{type:String},
    issues3:{type:String},
    date4:{type:String},
    issues4:{type:String},
    date5:{type:String},
    issues5:{type:String},
    date6:{type:String},
    issues6:{type:String},
    date7:{type:String},
    issues7:{type:String},
    date8:{type:String},
    issues8:{type:String},
    date9:{type:String},
    issues9:{type:String},
    date10:{type:String},
    issues10:{type:String},
    date11:{type:String},
    issues11:{type:String}
});

module.exports = {Individual};