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
  engineSpecs;
  comfortSpecs;
  safetySpecs;

  constructor(private route: ActivatedRoute, private carsService: CarsService) { }

  ngOnInit() {
    this.brand = this.route.snapshot.paramMap.get('brand');
    this.carId = +this.route.snapshot.paramMap.get('id');
    this.getCar(this.brand, this.carId);
    this.carImage = `../../../assets/cars/${this.carInfo.image}`;
    this.engineSpecs = this.carInfo.specs[0];
    this.comfortSpecs = this.carInfo.specs[1];
    this.safetySpecs = this.carInfo.specs[2];
  }

  getCar(brandName: string, id: number) {
    this.carInfo = this.carsService.getCar(brandName, id);
  }
}
