const mongoose = require('mongoose')
 
const Schema =  mongoose.Schema
const userSchema = new Schema({

     firstName: { type: String, trim: true, default: '' },
     otherNames: { type: String, trim: true, default: '' },
     role: { type: String, trim: true, default: '' },
     username: { type: String, trim: true, default: '' },
     email: { type: String, trim: true, default: '' },
     phone: { type: Number, trim: true, default: '' },
     password: { type: String, trim: true, default: '' }
 
     
});
module.exports = mongoose.model('user', userSchema, 'dashboardusers');
