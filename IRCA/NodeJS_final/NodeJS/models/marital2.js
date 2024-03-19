const mongoose = require('mongoose');

var Marital2 = mongoose.model('marital2', {
    name : {type:String},
    age : {type:Number},
    religion : {type:String},
    education : {type:String},
    occupation : {type:String},
    income : {type:String},
    no_years: {type: Number},
    choice : {type: String},
    previous_mar: {type: String},
    separated1: {type: Boolean},
    separated2 : {type:Number},
    wife : {type:Boolean},
    violence : {type:Boolean},
    violence1 : {type:Boolean},
    violence2 : {type :Boolean},
    violence3 : {type :Boolean},
    violence4: {type :Boolean},
    child_m : {type:Number},
    child_f : {type:Number}

});

module.exports = {Marital2};