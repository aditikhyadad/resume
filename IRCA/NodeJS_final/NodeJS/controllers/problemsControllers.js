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
            suicide : req.body.suicide,
            psychiatric :req.body.psychiatric,
            alcohol :req.body.alcohol,
            drug : req.body.drug,
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
            suicide : req.body.suicide,
            psychiatric :req.body.psychiatric,
            alcohol :req.body.alcohol,
            drug : req.body.drug
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
