const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { Adol } = require('../models/adolescence');
// => localhost:3000/adolescence/

router.get('/', async (req, res) => {
    try {
        const docs = await Adol.find().exec();
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
        const docs = await Adol.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving details: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', (req, res) => {
    var ad = new Adol({
        checkbox1: req.body.checkbox1,
        checkbox2: req.body.checkbox2,
        checkbox3: req.body.checkbox3,
        checkbox4: req.body.checkbox4,
        checkbox5: req.body.checkbox5,
        checkbox6: req.body.checkbox6,
        checkbox7: req.body.checkbox7,
        checkbox8: req.body.checkbox8
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
        checkbox1: req.body.checkbox1,
        checkbox2: req.body.checkbox2,
        checkbox3: req.body.checkbox3,
        checkbox4: req.body.checkbox4,
        checkbox5: req.body.checkbox5,
        checkbox6: req.body.checkbox6,
        checkbox7: req.body.checkbox7,
        checkbox8: req.body.checkbox8
    };

    try {
        const updatedDocument = await Adol.findByIdAndUpdate(
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
        const deletedDetails = await Adol.findByIdAndDelete(req.params.id).exec();

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
