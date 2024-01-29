import mongoose, { Schema, SchemaPreOptions } from "mongoose";

interface ICar {
  vinNumber: number;
  year: number;
  model: string;
  price: number;
}

const carSchema: Schema = new Schema<ICar>({
  vinNumber: { type: Number, required: true },
  year: { type: Number, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
});

interface ISedan extends ICar {
  zeroToOneHundred: number;
  consumptionPerOneHundredKM: number;
  tireSize?: number;
  color?: string;
}

const sedanSchema: Schema = new Schema<ISedan>({
  zeroToOneHundred: { type: Number, required: true },
  consumptionPerOneHundredKM: { type: Number, required: true },
  tireSize: { type: Number },
  color: { type: String },
});

const SedanModel = mongoose.model<ISedan & Document>("Sedan", sedanSchema);
// const CarModel = mongoose.model<ICar & Document>("Car", carSchema);

export default SedanModel;

// module.exports = CarModel;
