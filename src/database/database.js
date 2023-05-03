const mongoose = require('mongoose');

// Connecting to db
async function connectToDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Succesful connected to', mongoose.connection.name);
    })
    .catch(error => {
      console.error(error);
    });
}

connectToDB();
