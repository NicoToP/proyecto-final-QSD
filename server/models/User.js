import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 6,
      max: 40,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 1024,
    },
    password: {
      type: String,
      required: true,
      minlength: 12,
    },
    role: {
      type: String,
      required: true,
      default: 'user',
    },
  },
  {
    versionKey: false,
  }
)

export default mongoose.model('User', userSchema)
