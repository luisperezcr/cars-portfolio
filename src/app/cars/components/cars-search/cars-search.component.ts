import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
  styleUrls: ['./cars-search.component.scss']
})
export class CarsSearchComponent implements OnInit {
  showAll = true;
  selectedBrand: string;

  @Output()
  filter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelectChange() {
    if (this.selectedBrand) {
      this.showAll = false;
      this.filter.emit(this.selectedBrand);
    }
  }

  clearFilter() {
    this.selectedBrand = null;
    this.showAll = true;
    this.filter.emit(null);
  }
}
