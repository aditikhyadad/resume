const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { FinHistory } = require('../models/FinancialHistory');
 
// => localhost:3000/FinancialHistory/
router.get('/', async (req, res) => {
    try {
        const docs = await FinHistory.find().exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving FinancialHistory: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});


router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await FinHistory.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving FinancialHistory: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const sib = new FinHistory({
            family_friends: req.body.family_friends,
            banks: req.body.banks,
            workplace: req.body.workplace,
            lenders: req.body.lenders,
            pawnshops: req.body.pawnshops,
            othershops: req.body.othershops,
            mild:req.body.mild,
            moderate:req.body.moderate,
            severe:req.body.severe,
        });

        const savedFinancial = await sib.save();
        res.status(201).send(savedFinancial); // 201 Created status for successful creation
    } catch (err) {
        console.error('Error in saving FinancialHistory: ' + JSON.stringify(err, undefined, 2));

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
        family_friends: req.body.family_friends,
        banks: req.body.banks,
        workplace: req.body.workplace,
        lenders: req.body.lenders,
        pawnshops: req.body.pawnshops,
        othershops: req.body.othershops,
        mild:req.body.mild,
        moderate:req.body.moderate,
        severe:req.body.severe,
    };

    try {
        const updatedFinancial = await FinHistory.findByIdAndUpdate(req.params.id, { $set: sib }, { new: true }).exec();
        if (!updatedFinancial) {
            return res.status(404).send('FinancialHistory not found');
        }
        res.send(updatedFinancial);
    } catch (err) {
        console.error('Error in updating FinancialHistory: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedFinancial = await FinHistory.findByIdAndDelete(req.params.id).exec();

        if (!deletedFinancial) {
            return res.status(404).send('FinancialHistory not found');
        }

        res.send(deletedFinancial);
    } catch (err) {
        console.error('Error in deleting FinancialHistory: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
