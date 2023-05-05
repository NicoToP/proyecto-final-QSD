const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    description: {
      type: String,
    },
    staff: {
      type: mongoose.ObjectId,
      ref: 'Staff',
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Appointment', appointmentSchema);
