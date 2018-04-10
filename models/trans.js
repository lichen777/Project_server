const mongoose = require('mongoose');

const Schema = mongoose.Schema

// define the User model schema
const TransSchema = new mongoose.Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  proId: {
    type: Schema.Types.ObjectId,
    ref: 'Pro'
  },
  serviceId: {
    type: Schema.Types.ObjectId,
    ref: 'Service'
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    enum: ['In', 'Out']
  }
});

module.exports = mongoose.model('Trans', TransSchema);
