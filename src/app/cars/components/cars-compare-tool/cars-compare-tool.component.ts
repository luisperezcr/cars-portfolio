import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CompareState } from '../../../state/compare.state';
import { Car } from '../../models/car.interface';
import { RemoveAll } from '../../../actions/compare.actions';

@Component({
  selector: 'app-cars-compare-tool',
  templateUrl: './cars-compare-tool.component.html',
  styleUrls: ['./cars-compare-tool.component.scss']
})
export class CarsCompareToolComponent implements OnInit {
  @Select(CompareState.getCars)
  cars$: Observable<Car>;

  car_1: Car;
  car_2: Car;
  car_3: Car;

  constructor(private store: Store) { }

  ngOnInit() {
    this.cars$.subscribe((cars: any) => {
      this.car_1 = cars[0];
      this.car_2 = cars[1];
      this.car_3 = cars[2];
    });
  }

  onGoBack() {
    this.store.dispatch(new RemoveAll());
  }
}
