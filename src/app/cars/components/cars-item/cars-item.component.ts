import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../models/car.interface';

@Component({
  selector: 'app-cars-item',
  templateUrl: './cars-item.component.html',
  styleUrls: ['./cars-item.component.scss']
})
export class CarsItemComponent implements OnInit {
  @Input() brand: string;
  @Input() carInfo: Car;
  @Input() showCheckbox: boolean;
  @Output() selected: EventEmitter<{ carInfo: Car, checked: boolean }> = new EventEmitter<{ carInfo: Car, checked: boolean }>();
  carImage: string;
  lowerCaseBrand: string;

  constructor() { }

  ngOnInit() {
    if (!this.carInfo) { return; }
    this.carImage = `../../../assets/cars/${this.carInfo.image}`;
    this.lowerCaseBrand = this.brand.toLocaleLowerCase();
  }

  onSelectedChange(checked: boolean) {
    this.selected.emit({ carInfo: this.carInfo, checked: checked });
  }
}
