import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './containers/cars-list/cars-list.component';
import { CarsService } from './services/cars.service';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsItemComponent } from './components/cars-item/cars-item.component';



@NgModule({
  declarations: [CarsListComponent, CarsItemComponent],
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  providers: [CarsService]
})
export class CarsModule { }
