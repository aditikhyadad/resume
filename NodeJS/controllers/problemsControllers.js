const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { Problems } = require('../models/problems');

// => localhost:3000/problems/
router.get('/', async (req, res) => {
    try {
        const docs = await Problems.find().exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving Problems: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await Problems.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving Problems: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const pb = new Problems({
            depression : req.body.depression,
            d2 : req.body.d2,
            d3 : req.body.d3,
            d4 : req.body.d4,
            suicide : req.body.suicide,
            s2 : req.body.s2,
            s3 : req.body.s3,
            s4 : req.body.s4,
            psychiatric :req.body.psychiatric,
            p2 : req.body.p2,
            p3: req.body.p3,
            p4 : req.body.p4,
            alcohol :req.body.alcohol,
            a2 : req.body.a2,
            a3 : req.body.a3,
            a4 : req.body.a4,
            drug : req.body.drug,
            dr2 : req.body.dr2,
            dr3 : req.body.dr3,
            dr4 : req.body.dr4,
        });

        const savedPb = await pb.save();
        res.status(201).send(savedPb); // 201 Created status for successful creation
    } catch (err) {
        console.error('Error in saving Problem: ' + JSON.stringify(err, undefined, 2));

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

        const pb = new Problems({
            depression : req.body.depression,
            d2 : req.body.d2,
            d3 : req.body.d3,
            d4 : req.body.d4,
            suicide : req.body.suicide,
            s2 : req.body.s2,
            s3 : req.body.s3,
            s4 : req.body.s4,
            psychiatric :req.body.psychiatric,
            p2 : req.body.p2,
            p3: req.body.p3,
            p4 : req.body.p4,
            alcohol :req.body.alcohol,
            a2 : req.body.a2,
            a3 : req.body.a3,
            a4 : req.body.a4,
            drug : req.body.drug,
            dr2 : req.body.dr2,
            dr3 : req.body.dr3,
            dr4 : req.body.dr4,
        });

    try {
        const updatedProblem = await Problems.findByIdAndUpdate(req.params.id, { $set: pb }, { new: true }).exec();
        if (!updatedProblem) {
            return res.status(404).send('Problem not found');
        }
        res.send(updatedProblem);
    } catch (err) {
        console.error('Error in updating Problem: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedProblem = await Problems.findByIdAndDelete(req.params.id).exec();

        if (!deletedProblem) {
            return res.status(404).send('Problem not found');
        }

        res.send(deletedProblem);
    } catch (err) {
        console.error('Error in deleting Problem: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;