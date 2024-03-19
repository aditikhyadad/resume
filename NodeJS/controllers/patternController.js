const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { Pattern } = require('../models/pattern');

// => localhost:3000/patterns/
router.get('/', async (req, res) => {
    try {
        const docs = await Pattern.find().exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving patterns: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await Pattern.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving Pattern: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const sib = new Pattern({
            family : req.body.family,
            disowned : req.body.disowned,
            mixed : req.body.mixed,
            conflict : req.body.conflict
        });

        const savedPattern = await sib.save();
        res.status(201).send(savedPattern); // 201 Created status for successful creation
    } catch (err) {
        console.error('Error in saving Pattern: ' + JSON.stringify(err, undefined, 2));

        if (err.name === 'ValidationError') {
            res.status(400).send('Validation Error: ' + err.message);
        } else {
            res.status(500).send('Internal Server Error');
        }
    }
});

router.put('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    var sib = {
        family : req.body.family,
        disowned : req.body.disowned,
        mixed : req.body.mixed,
        conflict : req.body.conflict
    };

    try {
        const updatedPattern = await Pattern.findByIdAndUpdate(req.params.id, { $set: sib }, { new: true }).exec();
        if (!updatedPattern) {
            return res.status(404).send('Pattern not found');
        }
        res.send(updatedPattern);
    } catch (err) {
        console.error('Error in updating Pattern: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedPattern = await Pattern.findByIdAndDelete(req.params.id).exec();

        if (!deletedPattern) {
            return res.status(404).send('Pattern not found');
        }

        res.send(deletedPattern);
    } catch (err) {
        console.error('Error in deleting Pattern: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;


// {
//     "family" : {
//         "f1" : true,
//         "f2" : true,
//         "f3" : false,
//         "f4" : true
//     },
//      "disowned" : {
//         "d1" : true,
//         "d2" : true,
//         "d3" : false,
//         "d4" : true
//     },
//      "mixed" : {
//         "m1" : true,
//         "m2" : true,
//         "m3" : false,
//         "m4" : true
//     },
//      "conflict" : {
//         "c1" : true,
//         "c2" : true,
//         "c3" : false,
//         "c4" : true
//     }

// }