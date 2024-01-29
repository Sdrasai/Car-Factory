"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./db");
const mongoose_1 = __importDefault(require("mongoose"));
const car_model_1 = __importDefault(require("./car.model"));
const newSedan = new car_model_1.default({
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
    mongoose_1.default.disconnect();
})
    .catch((err) => {
    console.log(err);
});
