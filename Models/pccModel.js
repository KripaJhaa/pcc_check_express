const mongoose = require('mongoose')

const Schema = mongoose.Schema;

var pccSchema = mongoose.Schema({

    state: {
        type: String
    },
    city: {
        type: String
    },
    addressProof: {
        type: String
    },
    idProof: {
        type: String
    },
    photograph: {
        type: Boolean
    },
    signature: {
        type: Boolean
    },
    affidavit: {
        type: Boolean
    },
    dob: Date,
    companyRequestLetter: {
        type: Boolean
    },
    paymentMode: {
        type: String
    },
    paymentLocation: {
        type: String
    },
    paymentWhen: {
        type: String
    },
    recieptSubmission: {
        type: String
    },
    candidateToVisit: {
        type: Boolean
    },
    applicationSubmissionLocation: {
        type: String
    },
    paymentRecipt: {
        type: Boolean
    },
    physicalVisitDoneBy: {
        type: String
    },
    repostStatus: {
        type: String
    },
    timeLineForPvReport: {
        type: String
    }

});


module.exports = mongoose.model("pccSchema", pccSchema);