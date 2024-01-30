"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SedanModel = exports.BusModel = exports.TractorModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const carSchema = new mongoose_1.Schema({
    vinNumber: { type: Number, required: true },
    year: { type: Number, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
});
const sedanSchema = new mongoose_1.Schema({
    vinNumber: { type: Number, required: true },
    year: { type: Number, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    zeroToOneHundred: { type: Number, required: true },
    consumptionPerOneHundredKM: { type: Number, required: true },
    tireSize: { type: Number },
    color: { type: String },
});
const busSchema = new mongoose_1.Schema({
    vinNumber: { type: Number, required: true },
    year: { type: Number, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    passengers: { type: Number, require: true },
    dimension: { type: String },
});
const tractorSchema = new mongoose_1.Schema({
    vinNumber: { type: Number, required: true },
    year: { type: Number, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    power: { type: String, required: true },
    tools: { type: String },
});
exports.TractorModel = mongoose_1.default.model("Tractor", tractorSchema);
exports.BusModel = mongoose_1.default.model("Bus", busSchema);
exports.SedanModel = mongoose_1.default.model("Sedan", sedanSchema);
// const CarModel = mongoose.model<ICar & Document>("Car", carSchema);
// export default SedanModel;
// module.exports = CarModel;
