const mongoose = require('mongoose');
const ApplicantSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    interviewsList: {
        type: Array,
        default: [],
    },
    acceptedInterviewsList: {
        type: Array,
        default: [],
    },
    notifications: {
        type: [
            {
                id: String,
                from: String,
                interviewsReq: Boolean,
                notificationMsg: String,
            },
        ],
        default: [],
    },
    interviewerCreatedOn: {
        type: Date,
        default: Date.now(),
    },
    avatar: String,
});

const ApplicantModel = mongoose.model('Applicant', ApplicantSchema);

module.exports = ApplicantModel;
