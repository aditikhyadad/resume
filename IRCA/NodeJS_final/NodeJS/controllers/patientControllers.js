const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { Patients } = require('../models/patients');

// => localhost:3000/patients/
router.get('/', async (req, res) => {
    try {
        const docs = await Patients.find().exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving Patients: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await Patients.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving Patients: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const pat = new Patients({
            registrationno: req.body.registrationno,
            dateofregistration: req.body.dateofregistration,
            name: req.body.name,
            address: req.body.address,
            taluk: req.body.taluk,
            district: req.body.district,
            state: req.body.state,
            homephone:req.body.homephone,
            telephone:req.body.telephone,
            sex: req.body.sex,
            age:req.body.age,
            dateofbirth:req.body.dateofbirth,
            religion:req.body.religion,
            community: req.body.community,
            educationqualification: req.body.educationqualification,
            occupation:req.body.occupation,
            income:req.body.income,
            maritalstatus: req.body.maritalstatus,
            livingarrangements: req.body.livingarrangements,
            nameoffamilymem: req.body.nameoffamilymem,
            nameofsupperson: req.body.nameofsupperson,
            suppersonaddress:req.body.suppersonaddress,
            suppersonteleno:req.body.suppersonteleno,
            referral: req.body.referral,
        });

        const savedPatient = await pat.save();
        res.status(201).send(savedPatient); // 201 Created status for successful creation
    } catch (err) {
        console.error('Error in saving Patient: ' + JSON.stringify(err, undefined, 2));

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

    var pat = {
            registrationno: req.body.registrationno,
            dateofregistration: req.body.dateofregistration,
            name: req.body.name,
            address: req.body.address,
            taluk: req.body.taluk,
            district: req.body.district,
            state: req.body.state,
            homephone:req.body.homephone,
            telephone:req.body.telephone,
            sex: req.body.sex,
            age:req.body.age,
            dateofbirth:req.body.dateofbirth,
            religion:req.body.religion,
            community: req.body.community,
            educationqualification: req.body.educationqualification,
            occupation:req.body.occupation,
            income:req.body.income,
            maritalstatus: req.body.maritalstatus,
            livingarrangements: req.body.livingarrangements,
            nameoffamilymem: req.body.nameoffamilymem,
            nameofsupperson: req.body.nameofsupperson,
            suppersonaddress:req.body.suppersonaddress,
            suppersonteleno:req.body.suppersonteleno,
            referral: req.body.referral,
    };

    try {
        const updatedPatient = await Patients.findByIdAndUpdate(req.params.id, { $set: pat }, { new: true }).exec();
        if (!updatedPatient) {
            return res.status(404).send('Patient not found');
        }
        res.send(updatedPatient);
    } catch (err) {
        console.error('Error in updating Patient: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedPatient = await Patients.findByIdAndDelete(req.params.id).exec();

        if (!deletedPatient) {
            return res.status(404).send('Patient not found');
        }

        res.send(deletedPatient);
    } catch (err) {
        console.error('Error in deleting Patient: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
