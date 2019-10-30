import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  private data: [];
  carsData: [];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.data = this.carsService.getCars();
    this.carsData = this.data;
  }

  onFilter(brand: string) {
    if (!brand) {
      this.carsData = this.data;
      return;
    }
    const result = this.carsService.getCarsByBrand(brand);
    this.carsData = result;
  }
}
