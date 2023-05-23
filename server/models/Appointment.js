import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true,
      default: Date.now
    },
    description: {
      type: String
    },
    staff: {
      type: mongoose.ObjectId,
      ref: 'Staff'
    }
  },
  {
    timestamp: true,
    versionKey: false
  }
)

export default mongoose.model('Appointment', appointmentSchema)
