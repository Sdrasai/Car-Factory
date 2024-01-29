"use strict";
class Car {
    constructor(vinNumber, year, model, price) {
        this.vinNumber = vinNumber;
        this.year = year;
        this.model = model;
        this.price = price;
    }
}
class Sedan extends Car {
    constructor(zeroToOneHundred, consumptionPerOneHundredKM, vinNumber, year, model, price, tireSize, color) {
        super(vinNumber, year, model, price);
        this.zeroToOneHundred = zeroToOneHundred;
        this.consumptionPerOneHundredKM = consumptionPerOneHundredKM;
        this.tireSize = tireSize;
        this.color = color;
    }
}
class Tractor extends Car {
    constructor(power, vinNumber, year, model, price, tools) {
        super(vinNumber, year, model, price);
        this.power = power;
        this.tools = tools;
    }
}
class Bus extends Car {
    constructor(passengers, vinNumber, year, model, price, dimension) {
        super(vinNumber, year, model, price);
        this.passengers = passengers;
        this.dimension = dimension;
    }
}
