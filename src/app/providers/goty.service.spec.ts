import { TestBed } from '@angular/core/testing';

import { GotyService } from './goty.service';

describe('GotyService', () => {
  let service: GotyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GotyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
