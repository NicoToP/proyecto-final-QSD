import mongoose from 'mongoose'

const ownerSchema = new mongoose.Schema(
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
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      require: true,
    },
    pets: [
      {
        type: mongoose.ObjectId,
        ref: 'Pet',
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

ownerSchema.virtual('fullName').get(function () {
  return this.name.first + ' ' + this.name.last
})

export default mongoose.model('Owner', ownerSchema)
