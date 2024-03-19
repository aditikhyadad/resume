
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adolschema = new Schema({
    checkbox1:{type:Boolean},
    checkbox2:{type:Boolean},
    checkbox3:{type:Boolean},
    checkbox4:{type:Boolean},
    checkbox5:{type:Boolean},
    checkbox6:{type:Boolean},
    checkbox7:{type:Boolean},
    checkbox8:{type:Boolean}
});

const occupation = mongoose.model('occupation', adolschema);

module.exports = { occupation };
