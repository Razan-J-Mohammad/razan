import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CarComponent} from "./car/car.component";
import {CarService} from "../services/add-car.service";
@NgModule({
  declarations: [CarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CarService],
  exports: [CarComponent]
})
export class CarModule {}
