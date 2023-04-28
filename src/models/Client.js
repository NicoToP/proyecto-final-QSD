const mongoose = require('mongoose');

let ClientSchema = new mongoose.Schema({
  name: {type: String},
});

module.exports = mongoose.model('Client', ClientSchema);
