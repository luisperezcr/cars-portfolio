import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  carsData: [];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.carsData = this.carsService.getCars();
  }

}
