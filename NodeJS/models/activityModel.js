const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    checkbox1: { type: Boolean },
    checkbox2: { type: Boolean },
    checkbox3: { type: Boolean },
    checkbox4: { type: Boolean },
    checkbox5: { type: Boolean },
    checkbox6: { type: Boolean },
    checkbox25: { type: Boolean },
    checkbox26: { type: Boolean },
    checkbox27: { type: Boolean },
    checkbox28: { type: Boolean },
    checkbox29: { type: Boolean },
    checkbox30: { type: Boolean },
    
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = { Activity };

