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
