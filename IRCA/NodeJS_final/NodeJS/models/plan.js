const mongoose = require('mongoose');

var Plan = mongoose.model('plans', {
    sa:{type:String},
    tf:{type:String},
    sa1:{type:String},
    tf1:{type:String},
    sa2:{type:String},
    tf2:{type:String},
    sa3:{type:String},
    tf3:{type:String},
    sa4:{type:String},
    tf4:{type:String},
    sa5:{type:String},
    tf5:{type:String},
    sa6:{type:String},
    tf6:{type:String},
    sa7:{type:String},
    tf7:{type:String},
    sa8:{type:String},
    tf8:{type:String},
    dropout:{type:String},
    date:{type:Date},
    lackofmotivation:{type:String},
    lackoffamilysupport:{type:String},
    poverty:{type:String},
    legalproblem:{type:String},
    unabletocope:{type:String},
    inadequatefacilities:{type:String},
    anyother:{type:String},
    days:{type:String},
    months:{type:String},
    reasons:{type:String}
});

module.exports = {Plan};