import { TestBed, inject } from '@angular/core/testing';

import { DatatravelService } from './datatravel.service';

describe('DatatravelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatatravelService]
    });
  });

  it('should be created', inject([DatatravelService], (service: DatatravelService) => {
    expect(service).toBeTruthy();
  }));
});
