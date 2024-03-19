const mongoose = require('mongoose');
const weeklyDataSchema = {
    patientName: String,
    counsellor: String,
    groupNumber: Number,
    attendance: [Boolean],
    startDate: Date,
    endDate: Date,
    therapistName: String,
    focusTopic: String,
    feelingLevel: String,
    openAddressingIssue: String,
    groupSharing: String,
    undesirableBehaviour: String,
};

const WeeklyData = mongoose.model('WeeklyData',
    weeklyDataSchema
)


const GroupTheraphy = mongoose.model('GroupTheraphy',
    {
        allWeekData: [weeklyDataSchema],
        medicalReasons: Boolean,
        abusedPrescription: Boolean,
        getThroughWeek: Boolean,
        stopUsingDrugs: Boolean,
        blackouts: Boolean,
        feelGuilty: Boolean,
        complain: Boolean,
        problems: Boolean,
        lostFriends: Boolean,
        neglectFamily: Boolean,
        troubleAtWork: Boolean,
        lostJob: Boolean,
        fightsUnderInfluence: Boolean,
        illegalActivities: Boolean,
        arrested: Boolean,
        withdrawalSymptoms: Boolean,
        medicalProblems: Boolean,
        helpForProblem: Boolean,
        treatmentProgram: Boolean,
        abuseMultipleDrugs: Boolean
    }
)

module.exports = { WeeklyData, GroupTheraphy };
