import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../models/car.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  private data: [];
  carsData: [];
  showCheckbox = false;
  selectedCars: Car[] = [];
  compareBtnText = 'Compare cars';

  constructor(
    private router: Router,
    private carsService: CarsService,
    private _snackBar: MatSnackBar
  ) { }

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

  activeCompare() {
    if (!this.showCheckbox) {
      this.openSnackBar('Select up to 3 cars', 'OK');
    }

    this.showCheckbox = !this.showCheckbox;
    this.compareBtnText = this.showCheckbox ? 'Cancel' : 'Compare cars';
    this.selectedCars = this.selectedCars.slice();
  }

  onCarSelected(data: { carInfo: Car, checked: boolean }) {
    if (data.checked) {
      if (this.selectedCars.length === 2) {
        this.showCheckbox = false;
        this.selectedCars.push(data.carInfo);
        this.router.navigate(['cars/compare-tool']);
        return;
      }
      this.selectedCars.push(data.carInfo);
    } else {
      this.selectedCars = this.selectedCars.filter(car => car.id !== data.carInfo.id);
      this.showCheckbox = true;
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
