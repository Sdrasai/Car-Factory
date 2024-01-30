import mongoose, { Mongoose, Schema } from "mongoose";
import { ICar, ISedan, IBus, ITractor } from "./car.interface";

const sedanSchema: Schema = new Schema<ISedan>({
  vinNumber: { type: Number, required: true },
  year: { type: Number, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  zeroToOneHundred: { type: Number, required: true },
  consumptionPerOneHundredKM: { type: Number, required: true },
  tireSize: { type: Number },
  color: { type: String },
});

const busSchema: Schema = new Schema<IBus>({
  vinNumber: { type: Number, required: true },
  year: { type: Number, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  passengers: { type: Number, require: true },
  dimension: { type: String },
});

const tractorSchema: Schema = new Schema<ITractor>({
  vinNumber: { type: Number, required: true },
  year: { type: Number, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  power: { type: String, required: true },
  tools: { type: String },
});

export const TractorModel = mongoose.model<ITractor & Document>(
  "Tractor",
  tractorSchema
);
export const BusModel = mongoose.model<IBus & Document>("Bus", busSchema);

export const SedanModel = mongoose.model<ISedan & Document>(
  "Sedan",
  sedanSchema
);
