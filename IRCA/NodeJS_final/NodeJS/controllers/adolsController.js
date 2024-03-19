// const express = require('express');
// const router = express.Router();
// var ObjectId = require('mongoose').Types.ObjectId;

// const { medicalHistory } = require('../models/adols');
// // => localhost:3000/adolescence/

// router.get('/', async (req, res) => {
//     try {
//         const docs = await medicalHistory.find().exec();
//         res.json(docs);
//     } catch (error) {
//         console.error(error); // Log the error for debugging purposes
//         res.status(500).json({ error: 'Internal Server Error', message: error.message });
//     }
// });

// router.get('/:id', async (req, res) => {
//     if(!ObjectId.isValid(req.params.id))
//         return res.status(400).send('No record with given id: &(req.params.id)');

//     try {
//         const docs = await medicalHistory.findById(req.params.id).exec();
//         res.send(docs);
//     } catch (err) {
//         console.error('Error in retrieving details: ' + JSON.stringify(err, undefined, 2));
//         res.status(500).send('Internal Server Error');
//     }
// });

// router.post('/', (req, res) => {
//     var ad = new medicalHistory({
//         name:req.body.name,
//         age: req.body.age,
//         regno: req.body.regno,
//         selectedDrug: req.body.selectedDrug,
//         selectSpecificType:req.body.selectSpecificType,
//         selectedDrug1:req.body.selectedDrug1
//     });

//     ad.save()
//         .then(doc => {
//             res.status(201).json(doc);
//             console.log("successfully added data")
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).json({ error: 'Internal Server Error', message: err.message });
//         });

   
// // ad.save();
// // res.send("successfully added data")});
// // app.listen(3000, function () {
// //     console.log("Server started on port 3000");
// });

// router.put('/:id', async (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id: ${req.params.id}`);

//     const exp = {
//         name:req.body.name,
//         age: req.body.age,
//         regno: req.body.regno,
//         selectedDrug: req.body.selectedDrug,
//         selectSpecificType:req.body.selectSpecificType,
//         selectedDrug1:req.body.selectedDrug1
//     };

//     try {
//         const updatedDocument = await medicalHistory.findByIdAndUpdate(
//             req.params.id,
//             { $set: exp },
//             { new: true }
//         ).exec();

//         if (updatedDocument) {
//             res.send(updatedDocument);
//         } else {
//             res.status(404).json({ error: 'Record not found' });
//         }
//     } catch (error) {
//         console.error('Error in FamilyHistory Update:', error);
//         res.status(500).json({ error: 'Internal Server Error', message: error.message });
//     }
// });
// module.exports = router;
const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { medicalHistory } = require('../models/adols');
// => localhost:3000/adolescence/

router.get('/', async (req, res) => {
    try {
        const docs = await medicalHistory.find().exec();
        res.json(docs);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: &(req.params.id)');

    try {
        const docs = await medicalHistory.findById(req.params.id).exec();
        res.send(docs);
    } catch (err) {
        console.error('Error in retrieving details: ' + JSON.stringify(err, undefined, 2));
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', (req, res) => {
    var ad = new medicalHistory({
        regno: req.body.regno,
        name:req.body.name,
        age: req.body.age,
        registration:req.body.registration,
        selectedDrug: req.body.selectedDrug,
        ageof:req.body.ageof,
        yearsof:req.body.yearsof,
        excessive:req.body.excessive,
        selectSpecificType:req.body.selectSpecificType,
       route:req.body.route,
       frequency:req.body.frequency,
       quantity:req.body.quantity,
       past:req.body.past,


       selectedDrug1: req.body.selectedDrug1,
        ageof1:req.body.ageof1,
        yearsof1:req.body.yearsof1,
        excessive1:req.body.excessive1,
        selectSpecificType1:req.body.selectSpecificType1,
       route1:req.body.route1,
       frequency1:req.body.frequency1,
       quantity1:req.body.quantity1,
       past1:req.body.past1,

       selectedDrug2: req.body.selectedDrug2,
        ageof2:req.body.ageof2,
        yearsof2:req.body.yearsof2,
        excessive2:req.body.excessive2,
        selectSpecificType2:req.body.selectSpecificType2,
       route2:req.body.route2,
       frequency2:req.body.frequency2,
       quantity2:req.body.quantity2,
       past2:req.body.past2,

       selectedDrug3: req.body.selectedDrug3,
       ageof3:req.body.ageof3,
       yearsof3:req.body.yearsof3,
       excessive3:req.body.excessive3,
       selectSpecificType3:req.body.selectSpecificType3,
      route3:req.body.route3,
      frequency3:req.body.frequency3,
      quantity3:req.body.quantity3,
      past3:req.body.past3,

      selectedDrug4: req.body.selectedDrug4,
        ageof4:req.body.ageof4,
        yearsof4:req.body.yearsof4,
        excessive4:req.body.excessive4,
        selectSpecificType4:req.body.selectSpecificType4,
       route4:req.body.route4,
       frequency4:req.body.frequency4,
       quantity4:req.body.quantity4,
       past4:req.body.past4,



       selectedDrug5: req.body.selectedDrug5,
        ageof5:req.body.ageof5,
        yearsof5:req.body.yearsof5,
        excessive5:req.body.excessive5,
        selectSpecificType5:req.body.selectSpecificType5,
       route5:req.body.route5,
       frequency5:req.body.frequency5,
       quantity5:req.body.quantity5,
       past5:req.body.past5

    });

    ad.save()
        .then(doc => {
            res.status(201).json(doc);
            console.log("successfully added data")
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error', message: err.message });
        });

   
// ad.save();
// res.send("successfully added data")});
// app.listen(3000, function () {
//     console.log("Server started on port 3000");
});

router.put('/:id', async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`);


    const exp = {
        regno: req.body.regno,
        name:req.body.name,
        age: req.body.age,
        registration:req.body.registration,
        selectedDrug: req.body.selectedDrug,
        ageof:req.body.ageof,
        yearsof:req.body.yearsof,
        excessive:req.body.excessive,
        selectSpecificType:req.body.selectSpecificType,
       route:req.body.route,
       frequency:req.body.frequency,
       quantity:req.body.quantity,
       past:req.body.past,


       selectedDrug1: req.body.selectedDrug1,
        ageof1:req.body.ageof1,
        yearsof1:req.body.yearsof1,
        excessive1:req.body.excessive1,
        selectSpecificType1:req.body.selectSpecificType1,
       route1:req.body.route1,
       frequency1:req.body.frequency1,
       quantity1:req.body.quantity1,
       past1:req.body.past1,

        selectedDrug2: req.body.selectedDrug2,
        ageof2:req.body.ageof2,
        yearsof2:req.body.yearsof2,
        excessive2:req.body.excessive2,
        selectSpecificType2:req.body.selectSpecificType2,
        route2:req.body.route2,
        frequency2:req.body.frequency2,
        quantity2:req.body.quantity2,
        past2:req.body.past2,

       selectedDrug3: req.body.selectedDrug3,
       ageof3:req.body.ageof3,
       yearsof3:req.body.yearsof3,
       excessive3:req.body.excessive3,
       selectSpecificType3:req.body.selectSpecificType3,
      route3:req.body.route3,
      frequency3:req.body.frequency3,
      quantity3:req.body.quantity3,
      past3:req.body.past3,

        selectedDrug4: req.body.selectedDrug4,
        ageof4:req.body.ageof4,
        yearsof4:req.body.yearsof4,
        excessive4:req.body.excessive4,
        selectSpecificType4:req.body.selectSpecificType4,
       route4:req.body.route4,
       frequency4:req.body.frequency4,
       quantity4:req.body.quantity4,
       past4:req.body.past4,



       selectedDrug5: req.body.selectedDrug5,
        ageof5:req.body.ageof5,
        yearsof5:req.body.yearsof5,
        excessive5:req.body.excessive5,
        selectSpecificType5:req.body.selectSpecificType5,
       route5:req.body.route5,
       frequency5:req.body.frequency5,
       quantity5:req.body.quantity5,
       past5:req.body.past5
    };

    try {
        const updatedDocument = await medicalHistory.findByIdAndUpdate(
            req.params.id,
            { $set: exp },
            { new: true }
        ).exec();

        if (updatedDocument) {
            res.send(updatedDocument);
        } else {
            res.status(404).json({ error: 'Record not found' });
        }
    } catch (error) {
        console.error('Error in FamilyHistory Update:', error);
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
});
module.exports = router;