const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use production URI if it exists, otherwise fallback to local URI
    const mongoURI = process.env.MONGODB_URI_PROD || process.env.MONGODB_URI;

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected..');
  } catch (err) {
    console.error('MongoDB connection error: ', err);
    process.exit(1);
  }
};

module.exports = connectDB;
