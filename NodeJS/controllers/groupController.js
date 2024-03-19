const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { GroupTheraphy } = require('../models/group');
const { WeeklyData } = require('../models/group');
// => localhost:3000/adolescence/

const app = express();

router.post('/', (req, res) => {
    console.log(req.body);
    const weeklyData = [];
    weeklyData.push(new WeeklyData({
        patientName: req.body.name1,
        counsellor: req.body.counsellor1,
        groupNumber: req.body.group1,
        startDate: new Date(req.body.date1),
        endDate: new Date(req.body.to1),
        therapistName: req.body.therapy1,
        focusTopic: req.body.focus1,
        feelingLevel: req.body.feeling1,
        openAddressingIssue: req.body.issues1,
        groupSharing: req.body.involvement1,
        undesirableBehaviour: req.body.undesirableBehavior1,
    }));
    weeklyData.push(new WeeklyData({
        patientName: req.body.name2,
        counsellor: req.body.counsellor2,
        groupNumber: req.body.group2,
        startDate: req.body.date2,
        endDate: req.body.to2,
        therapistName: req.body.therapy2,
        focusTopic: req.body.focus2,
        feelingLevel: req.body.feeling2,
        openAddressingIssue: req.body.issues2,
        groupSharing: req.body.involvement2,
        undesirableBehaviour: req.body.undesirableBehavior2,
    }));
    weeklyData.push(new WeeklyData({
        patientName: req.body.name3,
        counsellor: req.body.counsellor3,
        groupNumber: req.body.group3,
        startDate: req.body.date3,
        endDate: req.body.to3,
        therapistName: req.body.therapy3,
        focusTopic: req.body.focus3,
        feelingLevel: req.body.feeling3,
        openAddressingIssue: req.body.issues3,
        groupSharing: req.body.involvement3,
        undesirableBehaviour: req.body.undesirableBehavior3,
    }));
    weeklyData.push(new WeeklyData({
        patientName: req.body.name4,
        counsellor: req.body.counsellor4,
        groupNumber: req.body.group4,
        startDate: req.body.date4,
        endDate: req.body.to4,
        therapistName: req.body.therapy4,
        focusTopic: req.body.focus4,
        feelingLevel: req.body.feeling4,
        openAddressingIssue: req.body.issues4,
        groupSharing: req.body.involvement4,
        undesirableBehaviour: req.body.undesirableBehavior4,
    }));

    const frontendData = {
        allWeekData: weeklyData,
        medicalReasons: req.body.medicalReasons,
        abusedPrescription: req.body.abusedPrescription,
        getThroughWeek: req.body.getThroughWeek,
        stopUsingDrugs: req.body.stopUsingDrugs,
        blackouts: req.body.blackouts,
        feelGuilty: req.body.feelGuilty,
        complain: req.body.complain,
        problems: req.body.problems,
        lostFriends: req.body.lostFriends,
        neglectFamily: req.body.neglectFamily,
        troubleAtWork: req.body.troubleAtWork,
        lostJob: req.body.lostJob,
        fightsUnderInfluence: req.body.fightsUnderInfluence,
        illegalActivities: req.body.illegalActivities,
        arrested: req.body.arrested,
        withdrawalSymptoms: req.body.withdrawalSymptoms,
        medicalProblems: req.body.medicalProblems,
        helpForProblem: req.body.helpForProblem,
        treatmentProgram: req.body.treatmentProgram,
        abuseMultipleDrugs: req.body.abuseMultipleDrugs
    };

    const mongoData = new GroupTheraphy(frontendData);
    mongoData.save();
    res.send('Data sent succesfully!');
});


module.exports = router;