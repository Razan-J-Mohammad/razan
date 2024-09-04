import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CarModule} from "./cars/cars.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
