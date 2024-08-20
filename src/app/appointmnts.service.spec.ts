import { TestBed } from '@angular/core/testing';

import { AppointmntsService } from './appointmnts.service';

describe('AppointmntsService', () => {
  let service: AppointmntsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmntsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
