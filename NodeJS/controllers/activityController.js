const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { Activity } = require('../models/activityModel');

// ../models/activityModel
// => localhost:3000/activities/

router.get('/', async (req, res) => {
    try {
        const activities = await Activity.find().exec();
        res.json(activities);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const activity = await Activity.findById(req.params.id).exec();
        if (activity) {
            res.json(activity);
        } else {
            res.status(404).json({ error: 'Activity not found' });
        }
    } catch (err) {
        console.error('Error in retrieving activity details:', err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', (req, res) => {
    const newActivity = new Activity({
        checkbox1: req.body.checkbox1,
        checkbox2: req.body.checkbox2,
        checkbox3: req.body.checkbox3,
        checkbox4: req.body.checkbox4,
        checkbox5: req.body.checkbox5,
        checkbox6: req.body.checkbox6,
        checkbox25: req.body.checkbox25,
        checkbox26: req.body.checkbox26,
        checkbox27: req.body.checkbox27,
        checkbox28: req.body.checkbox28,
        checkbox29: req.body.checkbox29,
        checkbox30: req.body.checkbox30
    });

    newActivity.save()
        .then(savedActivity => {
            res.status(201).json(savedActivity);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error', message: err.message });
        });
});

router.put('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    const updatedActivity = {
        checkbox1: req.body.checkbox1,
        checkbox2: req.body.checkbox2,
        checkbox3: req.body.checkbox3,
        checkbox4: req.body.checkbox4,
        checkbox5: req.body.checkbox5,
        checkbox6: req.body.checkbox6,
        checkbox25: req.body.checkbox25,
        checkbox26: req.body.checkbox26,
        checkbox27: req.body.checkbox27,
        checkbox28: req.body.checkbox28,
        checkbox29: req.body.checkbox29,
        checkbox30: req.body.checkbox30
    };

    try {
        const updatedDocument = await Activity.findByIdAndUpdate(
            req.params.id,
            { $set: updatedActivity },
            { new: true }
        ).exec();

        if (updatedDocument) {
            res.json(updatedDocument);
        } else {
            res.status(404).json({ error: 'Record not found' });
        }
    } catch (error) {
        console.error('Error in updating activity:', error);
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    try {
        const deletedActivity = await Activity.findByIdAndDelete(req.params.id).exec();

        if (!deletedActivity) {
            return res.status(404).send('Activity not found');
        }

        res.json(deletedActivity);
    } catch (err) {
        console.error('Error in deleting activity:', err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
