const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { Treatment } = require('../models/treatment');

// => localhost:3000/treatment/
router.get('/', async (req, res) => {
    try {
        const docs = await Treatment.find().exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving Treatments: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await Treatment.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving Treatments: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const treat = new Treatment({
            year: req.body.year,
            place: req.body.place,
            period: req.body.period,
            sobriety: req.body.sobriety,
            reason: req.body.reason,
            relapse: req.body.relapse,
        });

        const savedTreatment = await treat.save();
        res.status(201).send(savedTreatment); // 201 Created status for successful creation
    } catch (err) {
        console.error('Error in saving Treatment: ' + JSON.stringify(err, undefined, 2));

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

    var treat = {
        year: req.body.year,
        place: req.body.place,
        period: req.body.period,
        sobriety: req.body.sobriety,
        reason: req.body.reason,
        relapse: req.body.relapse,
    };

    try {
        const updatedTreatment = await Treatment.findByIdAndUpdate(req.params.id, { $set: treat }, { new: true }).exec();
        if (!updatedTreatment) {
            return res.status(404).send('Treatment not found');
        }
        res.send(updatedTreatment);
    } catch (err) {
        console.error('Error in updating Treatment: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedTreatment = await Treatment.findByIdAndDelete(req.params.id).exec();

        if (!deletedTreatment) {
            return res.status(404).send('Treatment not found');
        }

        res.send(deletedTreatment);
    } catch (err) {
        console.error('Error in deleting Treatment: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
