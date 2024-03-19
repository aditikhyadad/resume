const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { AreModel } = require('../models/areModel');

router.get('/', async (req, res) => {
    try {
        const areItems = await AreModel.find().exec();
        res.json(areItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const areItem = await AreModel.findById(req.params.id).exec();
        if (areItem) {
            res.json(areItem);
        } else {
            res.status(404).json({ error: 'Item not found' });
        }
    } catch (err) {
        console.error('Error in retrieving item details:', err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', (req, res) => {
    const newAreItem = new AreModel({
        checkbox7: req.body.checkbox7,
        checkbox8: req.body.checkbox8,
        checkbox9: req.body.checkbox9,
        checkbox10: req.body.checkbox10,
        checkbox11: req.body.checkbox11,
        checkbox12: req.body.checkbox12,
        checkbox13: req.body.checkbox13,
        checkbox14: req.body.checkbox14,
        checkbox15: req.body.checkbox15,
        checkbox16: req.body.checkbox16,
        checkbox17: req.body.checkbox17,
        checkbox18: req.body.checkbox18,
        checkbox19: req.body.checkbox19,
        checkbox20: req.body.checkbox20,
        checkbox21: req.body.checkbox21,
        checkbox22: req.body.checkbox22,
        checkbox23: req.body.checkbox23,
        checkbox24: req.body.checkbox24
    });

    newAreItem.save()
        .then(savedItem => {
            res.status(201).json(savedItem);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error', message: err.message });
        });
});

router.put('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    const updatedItem = {
        checkbox7: req.body.checkbox7,
        checkbox8: req.body.checkbox8,
        checkbox9: req.body.checkbox9,
        checkbox10: req.body.checkbox10,
        checkbox11: req.body.checkbox11,
        checkbox12: req.body.checkbox12,
        checkbox13: req.body.checkbox13,
        checkbox14: req.body.checkbox14,
        checkbox15: req.body.checkbox15,
        checkbox16: req.body.checkbox16,
        checkbox17: req.body.checkbox17,
        checkbox18: req.body.checkbox18,
        checkbox19: req.body.checkbox19,
        checkbox20: req.body.checkbox20,
        checkbox21: req.body.checkbox21,
        checkbox22: req.body.checkbox22,
        checkbox23: req.body.checkbox23,
        checkbox24: req.body.checkbox24
    };

    try {
        const updatedDocument = await AreModel.findByIdAndUpdate(
            req.params.id,
            { $set: updatedItem },
            { new: true }
        ).exec();

        if (updatedDocument) {
            res.json(updatedDocument);
        } else {
            res.status(404).json({ error: 'Record not found' });
        }
    } catch (error) {
        console.error('Error in updating item:', error);
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedItem = await AreModel.findByIdAndDelete(req.params.id).exec();

        if (!deletedItem) {
            return res.status(404).send('Item not found');
        }

        res.json(deletedItem);
    } catch (err) {
        console.error('Error in deleting item:', err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
