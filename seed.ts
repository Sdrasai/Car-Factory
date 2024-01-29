import "./db";
import mongoose from "mongoose";
import SedanModel from "./car.model";

const newSedan = new SedanModel({
  vinNumber: 11223344,
  model: "Prado",
  year: 2023,
  price: 100000,
  consumptionPerOneHundredKM: 10,
  zeroToOneHundred: 10,
  color: "white",
});

newSedan
  .save()
  .then(() => {
    console.log("Saved!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log(err);
  });
