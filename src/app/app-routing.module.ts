import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cars', pathMatch: 'full', loadChildren: './cars/cars.module#CarsModule' },
  { path: '', pathMatch: 'full', redirectTo: 'cars' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
