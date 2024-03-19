const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { Details } = require('../models/details');

// => localhost:3000/details/
router.get('/', async (req, res) => {
    try {
        const docs = await Details.find().exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving details: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await Details.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving details: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const det = new Details({
            fname: req.body.fname,
            fage: req.body.fage,
            foccupation: req.body.foccupation,
            fincome: req.body.fincome,
            fdReason: req.body.fdReason,
            fdAge: req.body.fdAge,
            mname: req.body.mname,
            mage: req.body.mage,
            moccupation: req.body.moccupation,
            mincome: req.body.mincome,
            mdReason: req.body.mdReason,
            mdAge: req.body.mdAge
        });

        const savedDetails = await det.save();
        res.status(201).send(savedDetails); // 201 Created status for successful creation
    } catch (err) {
        console.error('Error in saving details: ' + JSON.stringify(err, undefined, 2));

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

    var det = {
        fname: req.body.fname,
        fage: req.body.fage,
        foccupation: req.body.foccupation,
        fincome: req.body.fincome,
        fdReason: req.body.fdReason,
        fdAge: req.body.fdAge,
        mname: req.body.mname,
        mage: req.body.mage,
        moccupation: req.body.moccupation,
        mincome: req.body.mincome,
        mdReason: req.body.mdReason,
        mdAge: req.body.mdAge
    };

    try {
        const updatedDetails = await Details.findByIdAndUpdate(req.params.id, { $set: det }, { new: true }).exec();
        if (!updatedDetails) {
            return res.status(404).send('Details not found');
        }
        res.send(updatedDetails);
    } catch (err) {
        console.error('Error in updating Details: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedDetails = await Details.findByIdAndDelete(req.params.id).exec();

        if (!deletedDetails) {
            return res.status(404).send('Details not found');
        }

        res.send(deletedDetails);
    } catch (err) {
        console.error('Error in deleting Details: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
