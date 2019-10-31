import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { CompareState } from '../../../state/compare.state';
import { Router } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../models/car.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddCar, RemoveCar, RemoveAll } from '../../../actions/compare.actions';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  @Select(CompareState.getCars)
  cars$: Observable<Car>;

  private data: [];
  carsData: [];
  showCheckbox = false;
  selectedCars: Car[] = [];
  compareBtnText = 'Compare cars';

  constructor(
    private store: Store,
    private router: Router,
    private carsService: CarsService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.data = this.carsService.getCars();
    this.carsData = this.data;

    this.cars$.subscribe((cars: any) => {
      this.selectedCars = cars;
    });
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
      this.showCheckbox = true;
      this.openSnackBar('Select at least 2 and up to 3 cars to compare', 'OK');
      this.compareBtnText = 'Cancel';
    } else if (this.selectedCars.length < 2) {
      this.showCheckbox = false;
      this.compareBtnText = 'Compare cars';
      this.store.dispatch(new RemoveAll());
    } else {
      this.router.navigate(['cars/compare-tool']);
    }
  }

  onCarSelected(data: { carInfo: Car, checked: boolean }) {
    if (data.checked) {
      if (this.selectedCars.length < 3) {
        this.store.dispatch(new AddCar(data.carInfo));
      }
    } else {
      this.store.dispatch(new RemoveCar(data.carInfo.id));
      this.showCheckbox = true;
    }

    if (this.selectedCars.length === 3) {
      this.router.navigate(['cars/compare-tool']);
    }
    if (this.selectedCars.length > 1) {
      this.compareBtnText = 'Go to compare';
    } else {
      this.compareBtnText = 'Cancel';
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
