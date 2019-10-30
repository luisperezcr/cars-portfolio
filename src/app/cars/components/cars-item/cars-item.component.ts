import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../models/car.interface';

@Component({
  selector: 'app-cars-item',
  templateUrl: './cars-item.component.html',
  styleUrls: ['./cars-item.component.scss']
})
export class CarsItemComponent implements OnInit {
  @Input() brand: string;
  @Input() carInfo: Car;
  carImage: string;

  constructor() { }

  ngOnInit() {
    if (!this.carInfo) { return; }
    this.carImage = `../../../assets/cars/${this.carInfo.image}`;
  }

}
