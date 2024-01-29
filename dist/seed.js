"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./db");
const car_model_1 = __importDefault(require("./car.model"));
const mongoose_1 = __importDefault(require("mongoose"));
const newCar = new car_model_1.default({
    vinNumber: 1234567,
    year: 2023,
    model: "BMW M5",
    price: 120000,
});
newCar
    .save()
    .then(() => {
    console.log("Saved!");
    mongoose_1.default.disconnect();
})
    .catch((err) => {
    console.log(err);
});
