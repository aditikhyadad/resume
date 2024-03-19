const mongoose = require('mongoose');

var Counsellor = mongoose.model('counsellors', {
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
    
});

module.exports = {Counsellor};