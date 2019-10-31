import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsListComponent } from './containers/cars-list/cars-list.component';
import { CarsViewerComponent } from './components/cars-viewer/cars-viewer.component';
import { CarsCompareToolComponent } from './components/cars-compare-tool/cars-compare-tool.component';

const routes: Routes = [
  { path: '', component: CarsListComponent },
  { path: ':brand/:id', component: CarsViewerComponent },
  { path: 'compare-tool', component: CarsCompareToolComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
