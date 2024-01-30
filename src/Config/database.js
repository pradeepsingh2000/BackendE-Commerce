const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const res = await mongoose.connect("mongodb://127.0.0.1:27017/Project", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (res) {
      console.log("Database connection established");
    }
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = connectDatabase;
