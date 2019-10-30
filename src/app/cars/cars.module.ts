import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './containers/cars-list/cars-list.component';



@NgModule({
  declarations: [CarsListComponent],
  imports: [
    CommonModule
  ]
})
export class CarsModule { }
