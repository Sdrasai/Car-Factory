import mongoose, { Schema } from "mongoose";
import { ICar } from "./car.interface";

export type CarDocument = ICar & Document;

const carSchema: Schema = new Schema({
  vinNumber: { type: Number },
  year: { type: Number },
  model: { type: String },
  price: { type: Number },
});

const carModel = mongoose.model<CarDocument>("Car", carSchema);

export default carModel;
