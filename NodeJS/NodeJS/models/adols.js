// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const medicalHistorySchema = new Schema({
// name:{type:String},
// age: {type:String},
// regno: {type:String},
// selectedDrug: {type:String},
// selectSpecificType:{type:String},
// selectedDrug1:{type:String}
// });

// const medicalHistory = mongoose.model('medicalHistory', medicalHistorySchema);

// module.exports = { medicalHistory };

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicalHistorySchema = new Schema({
  regno: String,
  name: String,
  age: String,
  registration: String,
  selectedDrug: String,
  ageof: String,
  yearsof: Number,
  excessive: Number,
  selectSpecificType: String,
  route: String,
  frequency: String,
  quantity: Number,
  past: Number,

  selectedDrug1: String,
  ageof1: Number,
  yearsof1: Number,
  excessive1: Number,
  selectSpecificType1: String,
  route1: String,
  frequency1: String,
  quantity1: Number,
  past1: Number,
  selectedDrug2: String,
  ageof2: Number,
  yearsof2: Number,
  excessive2: Number,
  selectSpecificType2: String,
  route2: String,
  frequency2: String,
  quantity2: Number,
  past2: Number,
  selectedDrug3: String,
  ageof3: Number,
  yearsof3: Number,
  excessive3: Number,
  selectSpecificType3: String,
  route3: String,
  frequency3: String,
  quantity3: Number,
  past3: Number,

  selectedDrug4: String,
  ageof4: Number,
  yearsof4: Number,
  excessive4: Number,
  selectSpecificType4: String,
  route4: String,
  frequency4: String,
  quantity4: Number,
  past4: Number,
  selectedDrug5: String,
  ageof5: Number,
  yearsof5: Number,
  excessive5: Number,
  selectSpecificType5: String,
  route5: String,
  frequency5: String,
  quantity5: Number,
  past5: Number,
});

const medicalHistory = mongoose.model("medicalHistory", medicalHistorySchema);

module.exports = { medicalHistory };
