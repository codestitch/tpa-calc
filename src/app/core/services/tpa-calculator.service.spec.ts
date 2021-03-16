import { TestBed } from '@angular/core/testing';

import { TpaCalculatorService } from './tpa-calculator.service';

describe('TpaCalculatorService', () => {
  let service: TpaCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TpaCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
