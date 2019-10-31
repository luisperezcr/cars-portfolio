import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FallbackPageComponent } from './fallback-page.component';

describe('FallbackPageComponent', () => {
  let component: FallbackPageComponent;
  let fixture: ComponentFixture<FallbackPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FallbackPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FallbackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
