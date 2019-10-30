import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../models/car.interface';

@Component({
  selector: 'app-cars-viewer',
  templateUrl: './cars-viewer.component.html',
  styleUrls: ['./cars-viewer.component.scss']
})
export class CarsViewerComponent implements OnInit {
  carInfo: Car;
  brand: string;
  carId: number;
  carImage: string;

  constructor(private route: ActivatedRoute, private carsService: CarsService) { }

  ngOnInit() {
    this.brand = this.route.snapshot.paramMap.get('brand');
    this.carId = +this.route.snapshot.paramMap.get('id');
    this.getCar(this.brand, this.carId);
    this.carImage = `../../../assets/cars/${this.carInfo.image}`;
  }

  getCar(brandName: string, id: number) {
    this.carInfo = this.carsService.getCar(brandName, id);
  }
}
