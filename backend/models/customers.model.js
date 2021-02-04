const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    entryDate: {
        type: Date,
        required: true,
        default: Date.now
    }


})



module.exports = mongoose.model('Customers', customerSchema);