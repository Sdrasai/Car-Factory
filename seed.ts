import "./db";
import mongoose from "mongoose";
import { SedanModel, BusModel, TractorModel } from "./car.model";

const newSedan = new SedanModel({
  vinNumber: 11223344,
  model: "Peraid",
  year: 2023,
  price: 100,
  consumptionPerOneHundredKM: 6,
  zeroToOneHundred: 100,
  color: "Nok medadi",
});

newSedan
  .save()
  .then(() => {
    console.log("new Sedan saved!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log(err);
  });

// const newBus = new BusModel({
//   vinNumber: 99887766,
//   model: "School bus",
//   year: 2020,
//   price: 20000,
//   passengers: 20,
//   dimension: "2 x 5",
// });

// newBus
//   .save()
//   .then(() => {
//     console.log("new Bus Saved!");
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const newTractor = new TractorModel({
//   vinNumber: 99118822,
//   model: "Lamborgini",
//   year: 1995,
//   price: 2000,
//   power: "750 HP",
//   tools: "Bil mekaniki",
// });

// newTractor
//   .save()
//   .then(() => {
//     console.log("new Tractor Saved!");
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });
