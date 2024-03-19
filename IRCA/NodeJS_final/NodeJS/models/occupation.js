const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const occuSchema = new Schema({
    age:{type:String},
    duration:{type:String},
    special:{type:String},
    check1:{type:Boolean},
    check2:{type:Boolean},
    check3:{type:Boolean},
    check4:{type:Boolean},
    reason:{type:String}
});

const occ = mongoose.model('occ', occuSchema);

module.exports = { occ };

