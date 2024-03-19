
const mongoose = require('mongoose');

var Previous = mongoose.model('previous', {    
  
datebox:{type:String},
Sweatingw:{type:Boolean},
Palpitationw:{type:Boolean},
Tremorsw:{type:Boolean},
Insomniaw:{type:Boolean},
Fitsw:{type:Boolean},
Nauseaw:{type:Boolean},
Achesw:{type:Boolean},
Anxietyw:{type:Boolean},
Transientw:{type:Boolean},
Auditoryw:{type:Boolean},

Haematemesisha:{type:Boolean},
Jaundiceha:{type:Boolean},
Headha:{type:Boolean},
Seizureha:{type:Boolean},
Abscessesha:{type:Boolean},
Bleedingha:{type:Boolean},
Skinha:{type:Boolean},
Nerveha:{type:Boolean},
Anyha:{type:Boolean},
Noneha:{type:Boolean},

Haematemesishr:{type:Boolean},
Jaundicehr:{type:Boolean},
Headhr:{type:Boolean},
Seizurehr:{type:Boolean},
Abscesseshr:{type:Boolean},
Bleedinghr:{type:Boolean},
Skinhr:{type:Boolean},
Nervehr:{type:Boolean},
Anyhr:{type:Boolean},

Diabetesc:{type:Boolean},
Liverc:{type:Boolean},
Epilepsyc:{type:Boolean},
Cardiacc:{type:Boolean},
Infectionsc:{type:Boolean},
Pulmonaryc:{type:Boolean},
Chronic_bc:{type:Boolean},
Chronic_ac:{type:Boolean},
othersbox:{type:String},

Seizureoa: {type:Boolean},
Depressionoa: {type:Boolean},
Suicidaloa: {type:Boolean},
Confusionoa: {type:Boolean},
Aggressiveoa: {type:Boolean},
Hallucinationoa: {type:Boolean},
Paranoiaoa: {type:Boolean},
Noneoa: {type:Boolean},

Seizureor: {type:Boolean},
Depressionor: {type:Boolean},
Suicidalor: {type:Boolean},
Confusionor: {type:Boolean},
Aggressiveor: {type:Boolean},
Hallucinationor: {type:Boolean},
Paranoiaor: {type:Boolean},

Hist_of_prev_head: {type:String},
Knowledge: {type:String},
Type_of_drug: {type:String},
Mention_who: {type:String}

     
});

module.exports = { Previous };