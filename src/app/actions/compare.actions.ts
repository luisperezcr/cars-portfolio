import { Car } from '../cars/models/car.interface';

export class AddCar {
  static readonly type = '[CAR] Add';

  constructor(public payload: Car) {}
}

export class RemoveCar {
  static readonly type = '[CAR] Remove';

  constructor(public payload: number) {}
}

export class RemoveAll {
  static readonly type = '[CAR] RemoveAll';

  constructor() {}
}
