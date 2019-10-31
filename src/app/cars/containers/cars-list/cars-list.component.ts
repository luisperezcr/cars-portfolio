import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../models/car.interface';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  private data: [];
  carsData: [];
  showCheckbox = true;
  selectedCars: Car[] = [];

  constructor(private router: Router, private carsService: CarsService) { }

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

  onCarSelected(data: { carInfo: Car, checked: boolean }) {
    if (data.checked) {
      if (this.selectedCars.length === 2) {
        this.showCheckbox = false;
        this.selectedCars.push(data.carInfo);
        this.router.navigate(['/compare-tool']);
        return;
      }
      this.selectedCars.push(data.carInfo);
    } else {
      this.selectedCars = this.selectedCars.filter(car => car.id !== data.carInfo.id);
      this.showCheckbox = true;
    }
    console.log(this.selectedCars);
  }
}
