const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { Previous } = require('../models/previous');

// => localhost:3000/previous/
router.get('/', async (req, res) => {
    try {
        const docs = await Previous.find().exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving previous: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await Previous.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving previous: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const sib = new Previous({
datebox:req.body.datebox,
Sweatingw:req.body.Sweatingw,
Palpitationw:req.body.Palpitationw,
Tremorsw:req.body.Tremorsw,
Insomniaw:req.body.Insomniaw,
Fitsw:req.body.Fitsw,
Nauseaw:req.body.Nauseaw,
Achesw:req.body.Achesw,
Anxietyw:req.body.Anxietyw,
Transientw:req.body.Transientw,
Auditoryw:req.body.Auditoryw,

Haematemesisha:req.body.Haematemesisha,
Jaundiceha:req.body.Jaundiceha,
Headha:req.body.Headha,
Seizureha:req.body.Seizureha,
Abscessesha:req.body.Abscessesha,
Bleedingha:req.body.Bleedingha,
Skinha:req.body.Skinha,
Nerveha:req.body.Nerveha,
Anyha:req.body.Anyha,
Noneha:req.body.Noneha,

Haematemesishr:req.body.Haematemesishr,
Jaundicehr:req.body.Jaundicehr,
Headhr:req.body.Headhr,
Seizurehr:req.body.Seizurehr,
Abscesseshr:req.body.Abscesseshr,
Bleedinghr:req.body.Bleedinghr,
Skinhr:req.body.Skinhr,
Nervehr:req.body.Nervehr,
Anyhr:req.body.Anyhr,

Diabetesc:req.body.Diabetesc,
Liverc:req.body.Liverc,
Epilepsyc:req.body.Epilepsyc,
Cardiacc: req.body.Cardiacc,
Infectionsc:req.body.Infectionsc,
Pulmonaryc:req.body.Pulmonaryc,
Chronic_bc:req.body.Chronic_bc,
Chronic_ac:req.body.Chronic_ac,
othersbox:req.body.othersbox,

Seizureoa:req.body.Seizureoa,
Depressionoa:req.body.Depressionoa,
Suicidaloa:req.body.Suicidaloa,
Confusionoa:req.body.Confusionoa,
Aggressiveoa:req.body.Aggressiveoa,
Hallucinationoa:req.body.Hallucinationoa,
Paranoiaoa:req.body.Paranoiaoa,
Noneoa:req.body.Noneoa,

Seizureor:req.body.Seizureor,
Depressionor:req.body.Depressionor,
Suicidalor:req.body.Suicidalor,
Confusionor:req.body.Confusionor,
Aggressiveor:req.body.Aggressiveor,
Hallucinationor:req.body.Hallucinationor,
Paranoiaor:req.body.Paranoiaor,

Hist_of_prev_head:req.body.Hist_of_prev_head,
Knowledge:req.body.Knowledge,
Type_of_drug:req.body.Type_of_drug, 
Mention_who:req.body.Mention_who

        });

        const savedSib = await sib.save();           //prev 
        res.status(201).send(savedSib);          //201 Created status for successful creation
    } catch (err) {
        console.error('Error in saving previous: ' + JSON.stringify(err, undefined, 2));

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
        // c1: req.body.c1,
        // c2: req.body.c2,
        // c3: req.body.c3,
        // c4: req.body.c4,
_id:req.body._id,
datebox:req.body.datebox,
Sweatingw:req.body.Sweatingw,
Palpitationw:req.body.Palpitationw,
Tremorsw:req.body.Tremorsw,
Insomniaw:req.body.Insomniaw,
Fitsw:req.body.Fitsw,
Nauseaw:req.body.Nauseaw,
Achesw:req.body.Achesw,
Anxietyw:req.body.Anxietyw,
Transientw:req.body.Transientw,
Auditoryw:req.body.Auditoryw,

Haematemesisha:req.body.Haematemesisha,
Jaundiceha:req.body.Jaundiceha,
Headha:req.body.Headha,
Seizureha:req.body.Seizureha,
Abscessesha:req.body.Abscessesha,
Bleedingha:req.body.Bleedingha,
Skinha:req.body.Skinha,
Nerveha:req.body.Nerveha,
Anyha:req.body.Anyha,
Noneha:req.body.Noneha,

Haematemesishr:req.body.Haematemesishr,
Jaundicehr:req.body.Jaundicehr,
Headhr:req.body.Headhr,
Seizurehr:req.body.Seizurehr,
Abscesseshr:req.body.Abscesseshr,
Bleedinghr:req.body.Bleedinghr,
Skinhr:req.body.Skinhr,
Nervehr:req.body.Nervehr,
Anyhr:req.body.Anyhr,

Diabetesc:req.body.Diabetesc,
Liverc:req.body.Liverc,
Epilepsyc:req.body.Epilepsyc,
Cardiacc: req.body.Cardiacc,
Infectionsc:req.body.Infectionsc,
Pulmonaryc:req.body.Pulmonaryc,
Chronic_bc:req.body.Chronic_bc,
Chronic_ac:req.body.Chronic_ac,
othersbox:req.body.othersbox,

Seizureoa:req.body.Seizureoa,
Depressionoa:req.body.Depressionoa,
Suicidaloa:req.body.Suicidaloa,
Confusionoa:req.body.Confusionoa,
Aggressiveoa:req.body.Aggressiveoa,
Hallucinationoa:req.body.Hallucinationoa,
Paranoiaoa:req.body.Paranoiaoa,
Noneoa:req.body.Noneoa,

Seizureor:req.body.Seizureor,
Depressionor:req.body.Depressionor,
Suicidalor:req.body.Suicidalor,
Confusionor:req.body.Confusionor,
Aggressiveor:req.body.Aggressiveor,
Hallucinationor:req.body.Hallucinationor,
Paranoiaor:req.body.Paranoiaor,

Hist_of_prev_head:req.body.Hist_of_prev_head,
Knowledge:req.body.Knowledge,
Type_of_drug:req.body.Type_of_drug, 
Mention_who:req.body.Mention_who

    };

    // try {
    //     const updatedPrevious = await Previous.findByIdAndUpdate(req.params.id, { $set: sib }, { new: true }).exec();
    //     if (!updatedPrevious) {
    //         return res.status(404).send('Previous not found');
    //     }
    //     res.send(updatedPrevious);
    // } catch (err) {
    //     console.error('Error in updating Previous: ' + JSON.stringify(err, undefined, 2));
    //     res.status(500).send('Internal Server Error');
    // }
});

// router.delete('/:id', async (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id: ${req.params.id}`);

//     try {
//         const deletedPrevious = await Previous.findByIdAndDelete(req.params.id).exec();

//         if (!deletedPrevious) {
//             return res.status(404).send('Previous not found');
//         }

//         res.send(deletedPrevious);
//     } catch (err) {
//         console.error('Error in deleting Previous: ' + JSON.stringify(err, undefined, 2));
//         res.status(500).send('Internal Server Error');
//     }
// });

module.exports = router;