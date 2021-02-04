const mongoose = require('mongoose')

const reportSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    emailAddress:String,
    phoneNumber:String,
    dob:String

     
})

const reportModel = mongoose.model('Reports', reportSchema);
 
module.exports = reportModel