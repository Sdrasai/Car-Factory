import "./db";
import mongoose from "mongoose";
import { SedanModel, BusModel, TractorModel } from "./car.model";

BusModel.find({})
  .then((cars) => {
    console.log("All cars:", cars);
  })
  .catch((error) => {
    console.error("Error retrieving cars:", error);
  })
  .finally(() => {
    mongoose.disconnect();
  });
