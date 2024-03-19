const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { Marital2 } = require('../models/marital2');

// => localhost:3000/marital2/
router.get('/', async (req, res) => {
    try {
        const docs = await Marital2.find().exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving Marital2: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await Marital2.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving marital2s: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const sib = new Marital2({
            name : req.body.name,
            age : req.body.age,
            religion : req.body.religion,
            education : req.body.education,
            occupation : req.body.occupation,
            income : req.body.income,
            no_years: req.body.no_years,
            choice : req.body.choice,
            previous_mar: req.body.previous_mar,
            separated1: req.body.separated1,
            separated2 : req.body.separated2,
            wife : req.body.wife,
            violence : req.body.violence,
            violence1 : req.body.violence1,
            violence2 : req.body.violence2,
            violence3 : req.body.violence3,
            violence4: req.body.violence4,
            child_m : req.body.child_m,
            child_f : req.body.child_f
        });

        const savedMarital2 = await sib.save();
        res.status(201).send(savedMarital2); // 201 Created status for successful creation
    } catch (err) {
        console.error('Error in saving marital2: ' + JSON.stringify(err, undefined, 2));

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
        name : req.body.name,
        age : req.body.age,
        religion : req.body.religion,
        education : req.body.education,
        occupation : req.body.occupation,
        income : req.body.income,
        no_years: req.body.no_years,
        choice : req.body.choice,
        previous_mar: req.body.previous_mar,
        separated1: req.body.separated1,
        separated2 : req.body.separated2,
        wife : req.body.wife,
        violence : req.body.violence,
        violence1 : req.body.violence1,
        violence2 : req.body.violence2,
        violence3 : req.body.violence3,
        violence4: req.body.violence4,
        child_m : req.body.child_m,
        child_f : req.body.child_f
    };

    try {
        const updatedMarital2 = await Marital2.findByIdAndUpdate(req.params.id, { $set: sib }, { new: true }).exec();
        if (!updatedMarital2) {
            return res.status(404).send('Marital2 not found');
        }
        res.send(updatedMarital2);
    } catch (err) {
        console.error('Error in updating Marital2: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedMarital2 = await Marital2.findByIdAndDelete(req.params.id).exec();

        if (!deletedMarital2) {
            return res.status(404).send('Marital2 not found');
        }

        res.send(deletedMarital2);
    } catch (err) {
        console.error('Error in deleting Marital2: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
