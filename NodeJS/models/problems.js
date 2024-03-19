const mongoose = require('mongoose');

var Problems = mongoose.model('problems', {
    depression : {type : String},
    d2 : { type:Boolean},
    d3 : {type:Boolean},
    d4 : {type:Boolean},
    suicide : {type : String},
    s2 : { type:Boolean},
    s3 : {type:Boolean},
    s4 : {type:Boolean},
    psychiatric : {type :String},
    p2 : { type:Boolean},
    p3 : {type:Boolean},
    p4 : {type:Boolean},
    alcohol : {type: String},
    a2 : { type:Boolean},
    a3 : {type:Boolean},
    a4 : {type:Boolean},
    drug : {type :String},
    dr2 : { type:Boolean},
    dr3 : {type:Boolean},
    dr4 : {type:Boolean},
});

module.exports = {Problems};