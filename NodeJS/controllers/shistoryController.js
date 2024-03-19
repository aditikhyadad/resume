const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const { SexualHistory } = require('../models/shistory');
// const { route } = require('./treatmentControllers');
// => localhost:3000/adolescence/

const app = express();

// router.get("/shistory-list", function (req, res) {
//     SexualHistory.find({}).then(foundshistory => {
//         const responseData = foundshistory.map(d => {
//             return { id: d._id, ageOfPartner: d.ageOfPartner };
//         })
//         console.log(responseData);
//         res.json(responseData);
//     });
// });

router.get("/:id", function (req, res) {
    console.log(req.params.id);
    const id = req.params.id;
    SexualHistory.findById(id).then(data => {
        res.json(data);
    });
});

router.post('/', async (req, res) => {
    const sexualHist = new SexualHistory(req.body);
    const sData = await sexualHist.save();
    res.status(201).send(sData); // 201 Created status for successful creation
    // res.send('Form saved successfully!');
})

module.exports = router;