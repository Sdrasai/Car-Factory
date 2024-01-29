"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./db");
const mongoose_1 = __importDefault(require("mongoose"));
const car_model_1 = __importDefault(require("./car.model"));
car_model_1.default.find({})
    .then((cars) => {
    console.log("All Cars:", cars);
})
    .catch((error) => {
    console.error("Error retrieving cars:", error);
})
    .finally(() => {
    mongoose_1.default.disconnect();
});
