import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CompareState } from '../../../state/compare.state';
import { Car } from '../../models/car.interface';

@Component({
  selector: 'app-cars-compare-tool',
  templateUrl: './cars-compare-tool.component.html',
  styleUrls: ['./cars-compare-tool.component.scss']
})
export class CarsCompareToolComponent implements OnInit {
  @Select(CompareState.getCars)
  cars$: Observable<Car>;

  constructor() { }

  ngOnInit() {
    this.cars$.subscribe((car: any) => {
      console.log(car);
    });
  }
}
