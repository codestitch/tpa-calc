import { TestBed } from '@angular/core/testing';

import { BolusTimeService } from './bolus-time.service';

describe('BolusTimeService', () => {
  let service: BolusTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BolusTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
