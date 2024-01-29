class Car {
  vinNumber: number;
  year: number;
  model: string;
  price: number;
  constructor(vinNumber: number, year: number, model: string, price: number) {
    this.vinNumber = vinNumber;
    this.year = year;
    this.model = model;
    this.price = price;
  }
}

class Sedan extends Car {
  zeroToOneHundred: number;
  consumptionPerOneHundredKM: number;
  tireSize?: number;
  color?: string;
  constructor(
    zeroToOneHundred: number,
    consumptionPerOneHundredKM: number,
    vinNumber: number,
    year: number,
    model: string,
    price: number,
    tireSize?: number,
    color?: string
  ) {
    super(vinNumber, year, model, price);
    this.zeroToOneHundred = zeroToOneHundred;
    this.consumptionPerOneHundredKM = consumptionPerOneHundredKM;
    this.tireSize = tireSize;
    this.color = color;
  }
}
class Tractor extends Car {
  power: string;
  tools?: string;
  constructor(
    power: string,
    vinNumber: number,
    year: number,
    model: string,
    price: number,
    tools?: string
  ) {
    super(vinNumber, year, model, price);
    this.power = power;
    this.tools = tools;
  }
}
class Bus extends Car {
  passengers: number;
  dimension?: string;
  constructor(
    passengers: number,
    vinNumber: number,
    year: number,
    model: string,
    price: number,
    dimension?: string
  ) {
    super(vinNumber, year, model, price);
    this.passengers = passengers;
    this.dimension = dimension;
  }
}
