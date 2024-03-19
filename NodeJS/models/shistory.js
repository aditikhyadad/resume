const mongoose = require('mongoose');


const sexualHistorySchema = {
    ageOfPartner: String,
    sustainableRelationShip: String,
    yearsKnown: String,
    livingArrangement: String,
    anyChildren: Boolean,
    childrenDetails: String,
    highRiskSexualActivity: Boolean,
    condomUseWithCommercialWorker: String,
    sexCasualAcquaintance: Boolean,
    condomUseCasualAcquaintance: String,
    haveYouTestedHIV: Boolean,
    hIVStatus: String,
    notWillingToReveal: Boolean,
    notCollectedReports: Boolean,
    notApplicable: Boolean,
    sexualProblemStatus: Boolean,
    reducedLibido: Boolean,
    impotency: Boolean,
    excessiveSexualUrge: Boolean,
    completeAbstinence: Boolean,
    anyOther: Boolean,
};

const SexualHistory = mongoose.model("SexualHistory", sexualHistorySchema);

module.exports = {
    SexualHistory
};