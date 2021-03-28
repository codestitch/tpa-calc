import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolusTimeComponent } from './bolus-time.component';

describe('BolusTimeComponent', () => {
  let component: BolusTimeComponent;
  let fixture: ComponentFixture<BolusTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolusTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolusTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
