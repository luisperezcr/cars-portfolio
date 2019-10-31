import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsCompareToolComponent } from './cars-compare-tool.component';

describe('CarsCompareToolComponent', () => {
  let component: CarsCompareToolComponent;
  let fixture: ComponentFixture<CarsCompareToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsCompareToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsCompareToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
