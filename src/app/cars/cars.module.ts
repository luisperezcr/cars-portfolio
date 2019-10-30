import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './containers/cars-list/cars-list.component';
import { CarsService } from './services/cars.service';
import { CarsRoutingModule } from './cars-routing.module';



@NgModule({
  declarations: [CarsListComponent],
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  providers: [CarsService]
})
export class CarsModule { }
