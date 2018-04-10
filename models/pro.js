const mongoose = require('mongoose');

// define the User model schema
const ProSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String
  },
  bankAccount: {
    type: Number
  }
});

module.exports = mongoose.model('Pro', ProSchema);
