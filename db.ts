import mongoose from "mongoose";
import SedanModel from "./car.model";

(async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Car_Factory");
    console.log("Connected to db..");

    // SedanModel.find({})
    //   .then((cars) => {
    //     console.log("All cars:", cars);
    //   })
    //   .catch((error) => {
    //     console.error("Error retrieving cars:", error);
    //   })
    //   .finally(() => {
    //     mongoose.disconnect();
    //   });
  } catch (err) {
    console.log(err);
  }
})();
