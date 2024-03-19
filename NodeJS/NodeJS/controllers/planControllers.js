const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const { Plan } = require('../models/plan');
router.get('/', async (req, res) => {
    try {
        const docs = await Plan.find().exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving Plan: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});
router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await Plan.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving plans: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});
router.post('/', async (req, res) => {
    try {
        const pla = new Plan({
            sa:req.body.sa,
            tf:req.body.tf,
            sa1:req.body.sa1,
            tf1:req.body.tf1,
            sa2:req.body.sa2,
            tf2:req.body.tf2,
            sa3:req.body.sa3,
            tf3:req.body.tf3,
            sa4:req.body.sa4,
            tf4:req.body.tf4,
            sa5:req.body.sa5,
            tf5:req.body.tf5,
            sa6:req.body.sa6,
            tf6:req.body.tf6,
            sa7:req.body.sa7,
            tf7:req.body.tf7,
            sa8:req.body.sa8,
            tf8:req.body.tf8,
            dropout:req.body.dropout,
            lackofmotivation:req.body.lackofmotivation,
            lackoffamilysupport:req.body.lackoffamilysupport,
            poverty:req.body.poverty,
            legalproblem:req.body.legalproblem,
            unabletocope:req.body.unabletocope,
            inadequatefacilities:req.body.inadequatefacilities,
            anyother:req.body.anyother,
            days:req.body.days,
            months:req.body.months,
            reasons:req.body.reasons,

        });

        const savedPlan = await pla.save();
        res.status(201).send(savedPlan); // 201 Created status for successful creation
    } catch (err) {
        console.error('Error in saving Plan: ' + JSON.stringify(err, undefined, 2));

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
            sa:req.body.sa,
            tf:req.body.tf,
            sa1:req.body.sa1,
            tf1:req.body.tf1,
            sa2:req.body.sa2,
            tf2:req.body.tf2,
            sa3:req.body.sa3,
            tf3:req.body.tf3,
            sa4:req.body.sa4,
            tf4:req.body.tf4,
            sa5:req.body.sa5,
            tf5:req.body.tf5,
            sa6:req.body.sa6,
            tf6:req.body.tf6,
            sa7:req.body.sa7,
            tf7:req.body.tf7,
            sa8:req.body.sa8,
            tf8:req.body.tf8,
            dropout:req.body.dropout,
            date:req.body.date,
            lackofmotivation:req.body.lackofmotivation,
            lackoffamilysupport:req.body.lackoffamilysupport,
            poverty:req.body.poverty,
            legalproblem:req.body.legalproblem,
            unabletocope:req.body.unabletocope,
            inadequatefacilities:req.body.inadequatefacilities,
            anyother:req.body.anyother,
            days:req.body.days,
            months:req.body.months,
            reasons:req.body.reasons,
    };

    try {
        const updatedPlan = await Plan.findByIdAndUpdate(req.params.id, { $set: pla }, { new: true }).exec();
        if (!updatedPlan) {
            return res.status(404).send('plan not found');
        }
        res.send(updatedPlan);
    } catch (err) {
        console.error('Error in updating plan: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedPlan = await Sibling.findByIdAndDelete(req.params.id).exec();

        if (!deletedPlan) {
            return res.status(404).send('Plan not found');
        }

        res.send(deletedPlan);
    } catch (err) {
        console.error('Error in deleting Plan: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});
module.exports = router;