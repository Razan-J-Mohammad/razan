import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CarService} from "../../services/add-car.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  carForm: FormGroup;

  constructor(private fb: FormBuilder, private carService: CarService) {
    this.carForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      model: ['', Validators.required],
      year: ['']
    });
  }

  get cars() {
    return this.carService.getCars();
  }

  addCar() {
    if (this.carForm.valid) {
      this.carService.addCar(this.carForm.value);
      this.carForm.reset();
    }
  }

  deleteCar(index: number) {
    this.carService.deleteCar(index);
  }
}
