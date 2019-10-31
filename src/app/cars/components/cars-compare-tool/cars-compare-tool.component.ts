import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { CompareState } from '../../../state/compare.state';
import { RemoveAll } from '../../../actions/compare.actions';
import { Car } from '../../models/car.interface';

@Component({
  selector: 'app-cars-compare-tool',
  templateUrl: './cars-compare-tool.component.html',
  styleUrls: ['./cars-compare-tool.component.scss']
})
export class CarsCompareToolComponent implements OnInit, OnDestroy {
  @Select(CompareState.getCars)
  cars$: Observable<Car>;

  // Store the subscription so we can unsubscribe later
  carsSubscription: Subscription;

  carsToCompare: Car[];

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
    this.carsSubscription = this.cars$.subscribe((cars: any) => {
      this.carsToCompare = cars;
    });
    // If you got in this page but we don't have cars to compare, return to main page
    if (this.carsToCompare.length === 0) { this.router.navigate(['/cars']); }
  }

  // Go back to main page and clear the array
  onGoBack() {
    this.store.dispatch(new RemoveAll());
  }

  ngOnDestroy() {
    // Unsubscribe from Observable
    this.carsSubscription.unsubscribe();
  }
}
