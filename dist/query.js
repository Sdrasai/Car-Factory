"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./db");
const mongoose_1 = __importDefault(require("mongoose"));
const car_model_1 = require("./car.model");
car_model_1.BusModel.find({})
    .then((cars) => {
    console.log("All cars:", cars);
})
    .catch((error) => {
    console.error("Error retrieving cars:", error);
})
    .finally(() => {
    mongoose_1.default.disconnect();
});
/* output ==> Connected to db..
All cars: [
  {
    _id: new ObjectId('65b7c618e752548b0cc749db'),
    zeroToOneHundred: 2.9,
    consumptionPerOneHundredKM: 7,
    color: 'Green',
    __v: 0
  },
  {
    _id: new ObjectId('65b7c6552eeec3932c8fd60b'),
    zeroToOneHundred: 2.9,
    consumptionPerOneHundredKM: 7,
    color: 'Blue',
    __v: 0
  },
  {
    _id: new ObjectId('65b7c6e916d1f8a992483743'),
    zeroToOneHundred: 2.9,
    consumptionPerOneHundredKM: 7,
    color: 'red',
    __v: 0
  },
  {
    _id: new ObjectId('65b7d0b000ff0eb8de9ea8df'),
    zeroToOneHundred: 10,
    consumptionPerOneHundredKM: 10,
    color: 'white',
    __v: 0
  }
]*/
