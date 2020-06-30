require('dotenv').config();

const mongoose = require('mongoose');
const db = process.env.MONGO_LOCAL;

const connectDb = async () => {
  try {
    mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = connectDb;