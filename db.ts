import mongoose from "mongoose";

(async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Car_Factory");
    console.log("Connected to db..");
  } catch (err) {
    console.log(err);
  }
})();
