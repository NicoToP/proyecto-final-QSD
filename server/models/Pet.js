import mongoose from 'mongoose';

const petSchema = new mongoose.Schema(
  {
    namePet: {
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
      type: String,
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
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model('Pet', petSchema);
