
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceschema = new Schema({
    checkbox9:{type:Boolean},
    checkbox10:{type:Boolean},
    checkbox11:{type:Boolean},
    checkbox12:{type:Boolean},
    checkbox13:{type:Boolean},
    checkbox14:{type:Boolean},
    checkbox15:{type:Boolean},
    checkbox16:{type:Boolean}
});

const experience = mongoose.model('experience', experienceschema);

module.exports = { experience };
