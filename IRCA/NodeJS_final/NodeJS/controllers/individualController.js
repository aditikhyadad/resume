const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const { Individual } = require('../models/individual');
router.get('/', async (req, res) => {
    try {
        const docs = await Individual.find().exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving individual: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});
router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await Individual.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving individuals: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});
router.post('/', async (req, res) => {
    try {
        const indi = new Individual({
            date:req.body.date,
            issues:req.body.issues,
            date1:req.body.date1,
            issues1:req.body.issues1,
            date2:req.body.date2,
            issues2:req.body.issues2,
            date3:req.body.date3,
            issues3:req.body.issues3,
            date4:req.body.date4,
            issues4:req.body.issues4,
            date5:req.body.date5,
            issues5:req.body.issues5,
            date6:req.body.date6,
            issues6:req.body.issues6,
            date7:req.body.date7,
            issues7:req.body.issues7,
            date8:req.body.date8,
            issues8:req.body.issues8,
            date9:req.body.date9,
            issues9:req.body.issues9,
            date10:req.body.date10,
            issues10:req.body.issues10,
            date11:req.body.date11,
            issues11:req.body.issues11,
        });

        const savedIndividual = await indi.save();
        res.status(201).send(savedIndividual); // 201 Created status for successful creation
    } catch (err) {
        console.error('Error in saving individual: ' + JSON.stringify(err, undefined, 2));

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

    var pla = {
        date:req.body.date,
        issues:req.body.issues,
        date1:req.body.date1,
        issues1:req.body.issues1,
        date2:req.body.date2,
        issues2:req.body.issues2,
        date3:req.body.date3,
        issues3:req.body.issues3,
        date4:req.body.date4,
        issues4:req.body.issues4,
        date5:req.body.date5,
        issues5:req.body.issues5,
        date6:req.body.date6,
        issues6:req.body.issues6,
        date7:req.body.date7,
        issues7:req.body.issues7,
        date8:req.body.date8,
        issues8:req.body.issues8,
        date9:req.body.date9,
        issues9:req.body.issues9,
        date10:req.body.date10,
        issues10:req.body.issues10,
        date11:req.body.date11,
        issues11:req.body.issues11,
    };

    try {
        const updatedIndividual = await Individual.findByIdAndUpdate(req.params.id, { $set: coun }, { new: true }).exec();
        if (!updatedIndividual) {
            return res.status(404).send('individual not found');
        }
        res.send(updatedIndividual);
    } catch (err) {
        console.error('Error in updating individual: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedIndividual = await Individual.findByIdAndDelete(req.params.id).exec();

        if (!deletedIndividual) {
            return res.status(404).send('Plan not found');
        }

        res.send(deletedIndividual);
    } catch (err) {
        console.error('Error in deleting individual: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});
module.exports = router;
