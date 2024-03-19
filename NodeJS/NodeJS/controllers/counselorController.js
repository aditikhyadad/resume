const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const { Counsellor } = require('../models/counsellor');
router.get('/', async (req, res) => {
    try {
        const docs = await Counsellor.find().exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving counsellor: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});
router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await Counsellor.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving counsellors: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});
router.post('/', async (req, res) => {
    try {
        const coun = new Counsellor({
            date:req.body.date,
            issues:req.body.issues,
            date1:req.body.date1,
            issues1:req.body.issues1,
            date2:req.body.date2,
            issues2:req.body.issues2,
            date3:req.body.date3,
            issues3:req.body.issues3,
            date4:req.body.date4,
            issues4:req.body.issues4,
            date5:req.body.date5,
            issues5:req.body.issues5,
            date6:req.body.date6,
            issues6:req.body.issues6,
            date7:req.body.date7,
            issues7:req.body.issues7,


        });

        const savedCounsellor = await coun.save();
        res.status(201).send(savedCounsellor); // 201 Created status for successful creation
    } catch (err) {
        console.error('Error in saving Counsellor: ' + JSON.stringify(err, undefined, 2));

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

    var pla = {
        date:req.body.date,
        issues:req.body.issues,
        date1:req.body.date1,
        issues1:req.body.issues1,
        date2:req.body.date2,
        issues2:req.body.issues2,
        date3:req.body.date3,
        issues3:req.body.issues3,
        date4:req.body.date4,
        issues4:req.body.issues4,
        date5:req.body.date5,
        issues5:req.body.issues5,
        date6:req.body.date6,
        issues6:req.body.issues6,
        date7:req.body.date7,
        issues7:req.body.issues7,
    };

    try {
        const updatedCounsellor = await Counsellor.findByIdAndUpdate(req.params.id, { $set: coun }, { new: true }).exec();
        if (!updatedCounsellor) {
            return res.status(404).send('counsellor not found');
        }
        res.send(updatedCounsellor);
    } catch (err) {
        console.error('Error in updating counsellor: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedCounsellor = await Counsellor.findByIdAndDelete(req.params.id).exec();

        if (!deletedCounsellor) {
            return res.status(404).send('Plan not found');
        }

        res.send(deletedCounsellor);
    } catch (err) {
        console.error('Error in deleting Counsellor: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});
module.exports = router;