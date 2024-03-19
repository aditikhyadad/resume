
const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const { Medical } = require('../models/medical');
router.get('/', async (req, res) => {
    try {
        const docs = await Medical.find().exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving medical: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});
router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await Medical.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving medicals: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});
router.post('/', async (req, res) => {
    try {
        const med = new Medical({
           regno:req.body.regno,
           name1:req.body.name1,
           Ageofperson:req.body.Ageofperson,
           dateofregistration:req.body.dateofregistration,
           drugs:req.body.drugs,
           Age:req.body.Age,
           years:req.body.years,
           excessive:req.body.excessive,
           specifictype:req.body.specifictype,
           route:req.body.route,
           frequency:req.body.frequency,
           quantity:req.body.quantity,
           pastuseifany:req.body.pastuseifany,
           drugs1:req.body.drugs1,
           Age1:req.body.Age1,
           years1:req.body.years1,
           excessive1:req.body.excessive1,
           specifictype1:req.body.specifictype1,
           route1:req.body.route1,
           frequency1:req.body.frequency1,
           quantity1:req.body.quantity1,
           pastuseifany1:req.body.pastuseifany1,
           drugs2:req.body.drugs2,
           Age2:req.body.Age2,
           years2:req.body.years2,
           excessive2:req.body.excessive2,
           specifictype2:req.body.specifictype2,
           route2:req.body.route2,
           frequency2:req.body.frequency2,
           quantity2:req.body.quantity2,
           pastuseifany2:req.body.pastuseifany2,
           drugs3:req.body.drugs3,
           Age3:req.body.Age3,
           years3:req.body.years3,
           excessive3:req.body.excessive3,
           specifictype3:req.body.specifictype3,
           route3:req.body.route3,
           frequency3:req.body.frequency3,
           quantity3:req.body.quantity3,
           pastuseifany3:req.body.pastuseifany3,
           drugs4:req.body.drugs4,
           Age4:req.body.Age4,
           years4:req.body.years4,
           excessive4:req.body.excessive4,
           specifictype4:req.body.specifictype4,
           route4:req.body.route4,
           frequency4:req.body.frequency4,
           quantity4:req.body.quantity4,
           pastuseifany4:req.body.pastuseifany4,
           drugs5:req.body.drugs5,
           Age5:req.body.Age5,
           years5:req.body.years5,
           excessive5:req.body.excessive5,
           specifictype5:req.body.specifictype5,
           route5:req.body.route5,
           frequency5:req.body.frequency5,
           quantity5:req.body.quantity5,
           pastuseifany5:req.body.pastuseifany5,
           drugs6:req.body.drugs6,
           Age6:req.body.Age6,
           years6:req.body.years6,
           excessive6:req.body.excessive6,
           specifictype6:req.body.specifictype6,
           route6:req.body.route6,
           frequency6:req.body.frequency6,
           quantity6:req.body.quantity6,
           pastuseifany6:req.body.pastuseifany6,
        });

        const savedMed = await med.save();
        res.status(201).send(savedMed); // 201 Created status for successful creation
    } catch (err) {
        console.error('Error in saving medical: ' + JSON.stringify(err, undefined, 2));

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
        regno:req.body.regno,
           name1:req.body.name1,
           Ageofperson:req.body.Ageofperson,
           dateforregistration:req.body.dateforregistration,
           drugs:req.body.drugs,
           Age:req.body.Age,
           years:req.body.years,
           excessive:req.body.excessive,
           specifictype:req.body.specifictype,
           route:req.body.route,
           frequency:req.body.frequency,
           quantity:req.body.quantity,
           pastuseifany:req.body.pastuseifany,
           drugs1:req.body.drugs1,
           Age1:req.body.Age1,
           years1:req.body.years1,
           excessive1:req.body.excessive1,
           specifictype1:req.body.specifictype1,
           route1:req.body.route1,
           frequency1:req.body.frequency1,
           quantity1:req.body.quantity1,
           pastuseifany1:req.body.pastuseifany1,
           drugs2:req.body.drugs2,
           Age2:req.body.Age2,
           years2:req.body.years2,
           excessive2:req.body.excessive2,
           specifictype2:req.body.specifictype2,
           route2:req.body.route2,
           frequency2:req.body.frequency2,
           quantity2:req.body.quantity2,
           pastuseifany2:req.body.pastuseifany2,
           drugs3:req.body.drugs3,
           Age3:req.body.Age3,
           years3:req.body.years3,
           excessive3:req.body.excessive3,
           specifictype3:req.body.specifictype3,
           route3:req.body.route3,
           frequency3:req.body.frequency3,
           quantity3:req.body.quantity3,
           pastuseifany3:req.body.pastuseifany3,
           drugs4:req.body.drugs4,
           Age4:req.body.Age4,
           years4:req.body.years4,
           excessive4:req.body.excessive4,
           specifictype4:req.body.specifictype4,
           route4:req.body.route4,
           frequency4:req.body.frequency4,
           quantity4:req.body.quantity4,
           pastuseifany4:req.body.pastuseifany4,
           drugs5:req.body.drugs5,
           Age5:req.body.Age5,
           years5:req.body.years5,
           excessive5:req.body.excessive5,
           specifictype5:req.body.specifictype5,
           route5:req.body.route5,
           frequency5:req.body.frequency5,
           quantity5:req.body.quantity5,
           pastuseifany5:req.body.pastuseifany5,
           drugs6:req.body.drugs6,
           Age6:req.body.Age6,
           years6:req.body.years6,
           excessive6:req.body.excessive6,
           specifictype6:req.body.specifictype6,
           route6:req.body.route6,
           frequency6:req.body.frequency6,
           quantity6:req.body.quantity6,
           pastuseifany6:req.body.pastuseifany6,
    };

    try {
        const updatedMedical = await Medical.findByIdAndUpdate(req.params.id, { $set: coun }, { new: true }).exec();
        if (!updatedMedical) {
            return res.status(404).send('medical not found');
        }
        res.send(updatedMedical);
    } catch (err) {
        console.error('Error in updating medical: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedMedical= await Medical.findByIdAndDelete(req.params.id).exec();

        if (!deletedMedical) {
            return res.status(404).send('Plan not found');
        }

        res.send(deletedMedical);
    } catch (err) {
        console.error('Error in deleting medical: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});
module.exports = router;
