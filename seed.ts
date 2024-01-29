import "./db";
import Car from "./car.model";
import mongoose from "mongoose";

const newCar = new Car({
  vinNumber: 1234567,
  year: 2023,
  model: "BMW M5",
  price: 120000,
});

newCar
  .save()
  .then(() => {
    console.log("Saved!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log(err);
  });
