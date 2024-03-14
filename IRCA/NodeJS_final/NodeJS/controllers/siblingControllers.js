const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { Sibling } = require('../models/sibling');

// => localhost:3000/siblings/
router.get('/', async (req, res) => {
    try {
        const docs = await Sibling.find().exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving siblings: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await Sibling.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving siblings: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const sib = new Sibling({
            relationship: req.body.relationship,
            age: req.body.age,
            education: req.body.education,
            occupation: req.body.occupation,
        });

        const savedSibling = await sib.save();
        res.status(201).send(savedSibling); // 201 Created status for successful creation
    } catch (err) {
        console.error('Error in saving sibling: ' + JSON.stringify(err, undefined, 2));

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
        relationship: req.body.relationship,
        age: req.body.age,
        education: req.body.education,
        occupation: req.body.occupation,
    };

    try {
        const updatedSibling = await Sibling.findByIdAndUpdate(req.params.id, { $set: sib }, { new: true }).exec();
        if (!updatedSibling) {
            return res.status(404).send('Sibling not found');
        }
        res.send(updatedSibling);
    } catch (err) {
        console.error('Error in updating Sibling: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedSibling = await Sibling.findByIdAndDelete(req.params.id).exec();

        if (!deletedSibling) {
            return res.status(404).send('Sibling not found');
        }

        res.send(deletedSibling);
    } catch (err) {
        console.error('Error in deleting Sibling: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
