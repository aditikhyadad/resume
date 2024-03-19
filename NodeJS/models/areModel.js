const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const areSchema = new Schema({
    checkbox7: { type: Boolean },
    checkbox8: { type: Boolean },
    checkbox9: { type: Boolean },
    checkbox10: { type: Boolean },
    checkbox11: { type: Boolean },
    checkbox12: { type: Boolean },
    checkbox13: { type: Boolean },
    checkbox14: { type: Boolean },
    checkbox15: { type: Boolean },
    checkbox16: { type: Boolean },
    checkbox17: { type: Boolean },
    checkbox18: { type: Boolean },
    checkbox19: { type: Boolean },
    checkbox10: { type: Boolean },
    checkbox21: { type: Boolean },
    checkbox22: { type: Boolean },
    checkbox23: { type: Boolean },
    checkbox24: { type: Boolean }
});

const AreModel = mongoose.model('AreModel', areSchema);

module.exports = { AreModel };
