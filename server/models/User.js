import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const productSchema = new mongoose.Schema(
  {
    username: {
      type,
    },
  },
  { timestamps: true, versionKey: false }
)

export default mongoose.model('User', productSchema)
