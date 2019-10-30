import { Injectable } from '@angular/core';
import data from '../../../assets/data.json';
import { Car } from '../models/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  getCars = () => {
    return data;
  }

  getCarsByBrand(filter: string) {
    return data.filter(brand => brand.brand_name.toLowerCase() === filter);
  }
}
