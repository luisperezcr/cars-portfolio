import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './containers/cars-list/cars-list.component';
import { CarsService } from './services/cars.service';



@NgModule({
  declarations: [CarsListComponent],
  imports: [
    CommonModule
  ],
  providers: [CarsService]
})
export class CarsModule { }
