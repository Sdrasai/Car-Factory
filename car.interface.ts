export interface ICar {
  vinNumber: number;
  year: number;
  model: string;
  price: number;
}
export interface ISedan extends ICar {
  zeroToOneHundred: number;
  consumptionPerOneHundredKM: number;
  tireSize?: number;
  color?: string;
}
export interface IBus extends ICar {
  passengers: number;
  dimension?: string;
}
export interface ITractor extends ICar {
  power: string;
  tools?: string;
}
