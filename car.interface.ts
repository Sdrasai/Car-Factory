export enum Role {
  Sedan = "SEDAN",
  Bus = "BUS",
  Tractor = "TRACTOR",
}

export interface ICar {
  vinNumber: number;
  year: number;
  model: string;
  price: number;
}
