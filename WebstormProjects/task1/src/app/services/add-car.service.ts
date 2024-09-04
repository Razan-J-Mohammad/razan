import { Injectable } from '@angular/core';

interface Car {
  name: string;
  price: number;
  model: string;
  year?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [];

  getCars() {
    return this.cars;
  }

  addCar(car: Car) {
    this.cars.push(car);
  }

  deleteCar(index: number) {
    this.cars.splice(index, 1);
  }
}
