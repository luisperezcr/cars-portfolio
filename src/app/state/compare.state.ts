// import { State, Action, StateContext, Selector } from '@ngxs/store';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Car } from '../cars/models/car.interface';
import { AddCar, RemoveCar, RemoveAll } from '../actions/compare.actions';

export class CarsStateModel {
  cars: Car[];
}

@State<CarsStateModel>({
  name: 'cars',
  defaults: {
    cars: []
  }
})
export class CompareState {
  @Selector()
  static getCars(state: CarsStateModel) {
    return state.cars;
  }

  @Action(AddCar)
  add({ getState, patchState }: StateContext<CarsStateModel>, { payload }: AddCar ) {
    const state = getState();
    patchState({
      cars: [...state.cars, payload]
    });
  }

  @Action(RemoveCar)
  remove({ getState, patchState }: StateContext<CarsStateModel>, { payload }: RemoveCar ) {
    const state = getState();
    patchState({
      cars: state.cars.filter(car => car.id !== payload)
    });
  }

  @Action(RemoveAll)
  removeAll({ patchState }: StateContext<CarsStateModel>) {
    patchState({
      cars: []
    });
  }
}
