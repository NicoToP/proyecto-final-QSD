const mongoose = require('mongoose');

let ownerSchema = new mongoose.Schema(
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
    versionKey: false,
  }
);

ownerSchema.virtual('fullName').get(function () {
  return this.name.first + ' ' + this.name.last;
});

<<<<<<< HEAD
module.exports = mongoose.model('Owner', ownerSchema);
=======
module.exports = mongoose.model('Owner', ownerSchema);
>>>>>>> devNicolas
