const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { LegalHistory } = require('../models/LegalHistory');

// => localhost:3000/LegalHistory/
router.get('/', async (req, res) => {
    try {
        const docs = await LegalHistory.find().exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving LegalHistory: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await LegalHistory.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving LegalHistory: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const pat = new LegalHistory({
            saleofdrugs:req.body.saleofdrugs,
            possessionofdrugs:req.body.possessionofdrugs,
            arrestedfordrunkenbehaviour:req.body.arrestedfordrunkenbehaviour,
            finedfordrunkendriving:req.body.finedfordrunkendriving,
            accindentunderinfluence:req.body.accindentunderinfluence,
            assault:req.body.assault,
            anyother:req.body.anyother,
        }); 

        const savedLegalHistory = await pat.save();
        res.status(201).send(savedLegalHistory); // 201 Created status for successful creation
    } catch (err) {
        console.error('Error in saving LegalHistory: ' + JSON.stringify(err, undefined, 2));

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

    var pat = {
        saleofdrugs:req.body.saleofdrugs,
        possessionofdrugs:req.body.possessionofdrugs,
        arrestedfordrunkenbehaviour:req.body.arrestedfordrunkenbehaviour,
        finedfordrunkendriving:req.body.finedfordrunkendriving,
        accindentunderinfluence:req.body.accindentunderinfluence,
        assault:req.body.assault,
        anyother:req.body.anyother,
    };

    try {
        const updatedLegalHistory = await LegalHistory.findByIdAndUpdate(req.params.id, { $set: pat }, { new: true }).exec();
        if (!updatedLegalHistory) {
            return res.status(404).send('LegalHistory not found');
        }
        res.send(updatedLegalHistory);
    } catch (err) {
        console.error('Error in updating LegalHistory: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedLegalHistory = await LegalHistory.findByIdAndDelete(req.params.id).exec();

        if (!deletedLegalHistory) {
            return res.status(404).send('LegalHistory not found');
        }

        res.send(deletedLegalHistory);
    } catch (err) {
        console.error('Error in deleting LegalHistory: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
