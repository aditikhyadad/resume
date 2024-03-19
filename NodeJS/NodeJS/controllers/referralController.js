const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const { Referral } = require('../models/referral');
router.get('/', async (req, res) => {
    try {
        const docs = await Referral.find().exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving referral: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});
router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await Referral.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving referrals: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});
router.post('/', async (req, res) => {
    try {
        const ref = new Referral({
            dateanddetails:req.body.dateanddetails,
            actiontaken:req.body.actiontaken,
            referredto:req.body.referredto,
            organisation:req.body.organisation,
        });

        const savedReferral = await ref.save();
        res.status(201).send(savedReferral); // 201 Created status for successful creation
    } catch (err) {
        console.error('Error in saving Referral: ' + JSON.stringify(err, undefined, 2));

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
        dateanddetails:req.body.dateanddetails,
        actiontaken:req.body.actiontaken,
        referredto:req.body.referredto,
        organisation:req.body.organisation,
    };

    try {
        const updatedReferral = await Referral.findByIdAndUpdate(req.params.id, { $set: ref }, { new: true }).exec();
        if (!updatedReferral) {
            return res.status(404).send('plan not found');
        }
        res.send(updatedReferral);
    } catch (err) {
        console.error('Error in updating referral: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedReferral = await Referral.findByIdAndDelete(req.params.id).exec();

        if (!deletedReferral) {
            return res.status(404).send('Plan not found');
        }

        res.send(deletedReferral);
    } catch (err) {
        console.error('Error in deleting Referral: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});
module.exports = router;