import mongoose from 'mongoose'

const staffSchema = new mongoose.Schema(
  {
    name: {
      first: {
        type: String,
        required: true,
      },
      last: {
        type: String,
        required: true,
      },
    },
    specialty: {
      type: String,
      required: true,
    },
    professionalCard: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

staffSchema.virtual('fullName').get(function () {
  return this.name.first + ' ' + this.name.last
})

export default mongoose.model('Staff', staffSchema)
