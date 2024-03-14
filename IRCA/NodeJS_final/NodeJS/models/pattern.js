const mongoose = require("mongoose")

var Pattern = mongoose.model('patterns',{
    family : [{
        f1 : {type:Boolean},
        f2 : {type:Boolean},
        f3 : {type:Boolean},
        f4 : {type:Boolean},
    }],
    disowned : [{
        d1 : {type:Boolean},
        d2 : {type:Boolean},
        d3 : {type:Boolean},
        d4 : {type:Boolean},
    }],
    mixed : [{
        m1 : {type:Boolean},
        m2 : {type:Boolean},
        m3 : {type:Boolean},
        m4 : {type:Boolean},
    }],
    conflict : [{
        c1 : {type:Boolean},
        c2 : {type:Boolean},
        c3 : {type:Boolean},
        c4 : {type:Boolean},
    }]
});

module.exports = { Pattern };