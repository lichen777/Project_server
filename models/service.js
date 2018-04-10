const mongoose = require('mongoose');

const Schema = mongoose.Schema

// define the User model schema
const ServiceSchema = new mongoose.Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  proId: {
    type: Schema.Types.ObjectId,
    ref: 'Pro'
  },
  price: {
    type: Number,
    required: true
  },
  serviceDate: {
    type: Date,
    required: true
  },
  serviceType: {
    type: String,
    enum: ["lawn", "maid"]
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Service', ServiceSchema);
