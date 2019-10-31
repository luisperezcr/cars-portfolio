import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FallbackPageComponent } from './fallback-page/fallback-page.component';

const routes: Routes = [
  { path: 'cars', loadChildren: './cars/cars.module#CarsModule' },
  { path: '', pathMatch: 'full', redirectTo: 'cars' },
  { path: '**', component: FallbackPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
