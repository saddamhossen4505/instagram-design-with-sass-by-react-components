const mongoose = require("mongoose");

// Create mongoDbConnection.

const mongoDbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_STRING);
    console.log(`mongoDbConnection is successful`.bgGreen.black);
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// Export mongoDbConnection.
module.exports = mongoDbConnection;
