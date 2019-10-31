import { Injectable } from '@angular/core';
import data from '../../../assets/data.json';
import { Car } from '../models/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  // Return all data
  getCars = () => {
    return data;
  }

  // Get cars filtered by brand
  getCarsByBrand(filter: string) {
    return data.filter(brand => brand.brand_name.toLowerCase() === filter);
  }

  // Get specific car by brand and id
  getCar(brandName: string, id: number): Car {
    const brandData = data.filter(brand => brand.brand_name.toLowerCase() === brandName);
    const carInfo = brandData[0].cars.filter(car => car.id === id)[0];
    if (!brandData || !carInfo) { return null; }
    return carInfo;
  }
}
