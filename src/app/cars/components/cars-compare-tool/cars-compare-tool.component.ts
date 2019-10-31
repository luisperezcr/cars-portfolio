import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { CompareState } from '../../../state/compare.state';
import { Car } from '../../models/car.interface';
import { RemoveAll } from '../../../actions/compare.actions';

@Component({
  selector: 'app-cars-compare-tool',
  templateUrl: './cars-compare-tool.component.html',
  styleUrls: ['./cars-compare-tool.component.scss']
})
export class CarsCompareToolComponent implements OnInit, OnDestroy {
  @Select(CompareState.getCars)
  cars$: Observable<Car>;
  carsSubscription: Subscription;

  carsToCompare: Car[];

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
    this.carsSubscription = this.cars$.subscribe((cars: any) => {
      this.carsToCompare = cars;
    });
    if (this.carsToCompare.length === 0) { this.router.navigate(['/cars']); }
  }

  onGoBack() {
    this.store.dispatch(new RemoveAll());
  }

  ngOnDestroy() {
    this.carsSubscription.unsubscribe();
  }
}
