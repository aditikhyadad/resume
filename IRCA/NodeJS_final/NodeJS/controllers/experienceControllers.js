const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { experience } = require('../models/experience');
// => localhost:3000/adolescence/

router.get('/', async (req, res) => {
    try {
        const docs = await experience.find().exec();
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
        const docs = await experience.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving details: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', (req, res) => {
    var ad = new experience({
        checkbox9: req.body.checkbox9,
        checkbox10: req.body.checkbox10,
        checkbox11: req.body.checkbox11,
        checkbox12: req.body.checkbox12,
        checkbox13: req.body.checkbox13,
        checkbox14: req.body.checkbox14,
        checkbox15: req.body.checkbox15,
        checkbox16: req.body.checkbox16
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

    const exp = {
        checkbox9: req.body.checkbox9,
        checkbox10: req.body.checkbox10,
        checkbox11: req.body.checkbox11,
        checkbox12: req.body.checkbox12,
        checkbox13: req.body.checkbox13,
        checkbox14: req.body.checkbox14,
        checkbox15: req.body.checkbox15,
        checkbox16: req.body.checkbox16
    };

    try {
        const updatedDocument = await experience.findByIdAndUpdate(
            req.params.id,
            { $set: exp },
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
        const deletedDetails = await experience.findByIdAndDelete(req.params.id).exec();

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
