const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { Comment } = require('../models/comment');

// => localhost:3000/comment/
router.get('/', async (req, res) => {
    try {
        const docs = await Comment.find().exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving comment: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await Comment.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving comment: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const sib = new Comment({
            mild: req.body.mild,
            moderate: req.body.moderate,
            severe: req.body.severe,
        });

        const savedComment = await sib.save();
        res.status(201).send(savedComment); // 201 Created status for successful creation
    } catch (err) {
        console.error('Error in saving Comment: ' + JSON.stringify(err, undefined, 2));

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
        mild: req.body.mild,
        moderate: req.body.moderate,
            severe: req.body.severe,
    };

    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, { $set: sib }, { new: true }).exec();
        if (!updatedComment) {
            return res.status(404).send('Comment not found');
        }
        res.send(updatedComment);
    } catch (err) {
        console.error('Error in updating Comment: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id).exec();

        if (!deletedComment) {
            return res.status(404).send('Comment not found');
        }

        res.send(deletedComment);
    } catch (err) {
        console.error('Error in deleting Comment: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
