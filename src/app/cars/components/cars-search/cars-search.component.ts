import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
  styleUrls: ['./cars-search.component.scss']
})
export class CarsSearchComponent {
  showAll = true;
  selectedBrand: string;

  @Output()
  filter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  // Listen for changes on the selected filter
  onSelectChange() {
    if (this.selectedBrand) {
      this.showAll = false;
      // Emits the selected option
      this.filter.emit(this.selectedBrand);
    }
  }

  // Clear the filter selection
  clearFilter() {
    this.selectedBrand = null;
    this.showAll = true;
    // Emits with a null value so we show all cars
    this.filter.emit(null);
  }
}
