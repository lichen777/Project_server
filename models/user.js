const mongoose = require('mongoose');

// define the User model schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    enum: ['MON AM', 'MON PM', 'TUE AM', 'TUE PM', 'WED AM', 'WED PM', 'THU AM', 'THU PM', 'FRI AM', 'FRI PM']
  },
  preference: {
    type: [String],
    enum: []
  },
  name: String
});

module.exports = mongoose.model('User', UserSchema);
