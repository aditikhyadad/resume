const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const {occ} = require('../models/occupation');

router.get('/', async (req, res) => {
    try {
        const docs = await occ.find().exec();
        res.json(docs);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await occ.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving details: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', (req, res) => {
    var ad = new occ({
        age: req.body.age,
        duration: req.body.duration,
        special: req.body.special,
        check1: req.body.check1,
        check2: req.body.check2,
        check3: req.body.check3,
        check4: req.body.check4,
        reason: req.body.reason
    });

    ad.save()
        .then(doc => {
            res.status(201).json(doc);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error', message: err.message });
        });
});

router.put('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    const ad = {
        age: req.body.age,
        duration: req.body.duration,
        special: req.body.special,
        check1: req.body.check1,
        check2: req.body.check2,
        check3: req.body.check3,
        check4: req.body.check4,
        reason: req.body.reason
    };

    try {
        const updatedDocument = await occ.findByIdAndUpdate(
            req.params.id,
            { $set: ad },
            { new: true }
        ).exec();

        if (updatedDocument) {
            res.send(updatedDocument);
        } else {
            res.status(404).json({ error: 'Record not found' });
        }
    } catch (error) {
        console.error('Error in FamilyHistory Update:', error);
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedDetails = await occ.findByIdAndDelete(req.params.id).exec();

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



