import { TestBed, inject } from '@angular/core/testing';

import { SellorServiceService } from './sellor-service.service';

describe('SellorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellorServiceService]
    });
  });

  it('should be created', inject([SellorServiceService], (service: SellorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
