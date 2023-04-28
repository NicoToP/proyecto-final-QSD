const mongoose = require('mongoose');

// Connecting to db
async function connectToDB() {
  try {
    let db = await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to', db.connection.name);
  } catch (err) {
    console.error(err);
  }
}

connectToDB();
