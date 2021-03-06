import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './containers/cars-list/cars-list.component';
import { CarsService } from './services/cars.service';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsItemComponent } from './components/cars-item/cars-item.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialElevationDirective } from './directives/material-elevation.directive';
import { CarsSearchComponent } from './components/cars-search/cars-search.component';
import { CarsViewerComponent } from './components/cars-viewer/cars-viewer.component';
import { CarsCompareToolComponent } from './components/cars-compare-tool/cars-compare-tool.component';


@NgModule({
  declarations: [
    CarsListComponent,
    CarsItemComponent,
    MaterialElevationDirective,
    CarsSearchComponent,
    CarsViewerComponent,
    CarsCompareToolComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    SharedModule
  ],
  providers: [CarsService]
})
export class CarsModule { }
