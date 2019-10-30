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

  getCar(brandName: string, id: number): Car {
    const brandData = data.filter(brand => brand.brand_name.toLowerCase() === brandName);
    const carInfo = brandData[0].cars.filter(car => car.id === id)[0];
    if (!brandData || !carInfo) { return null; }
    return carInfo;
  }
}
