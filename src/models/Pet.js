const mongoose = require('mongoose');

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    species: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
    },
    weight: {
      type: Number,
    },
    dateBirth: {
      type: Date,
    },
    description: {
      type: String,
    },
    appointments: [
      {
        type: mongoose.ObjectId,
        ref: 'Appointments',
      },
    ],
  },
  {
    versionKey: false,
  }
);

<<<<<<< HEAD
module.exports = mongoose.model('Pet', petSchema);
=======
module.exports = mongoose.model('Pet', petSchema);
>>>>>>> devNicolas
