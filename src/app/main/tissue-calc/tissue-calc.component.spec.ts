import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TissueCalcComponent } from './tissue-calc.component';

describe('TissueCalcComponent', () => {
  let component: TissueCalcComponent;
  let fixture: ComponentFixture<TissueCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TissueCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TissueCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
