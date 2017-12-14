import { TestBed, inject } from '@angular/core/testing';

import { VentureService } from './venture.service';

describe('VentureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VentureService]
    });
  });

  it('should ...', inject([VentureService], (service: VentureService) => {
    expect(service).toBeTruthy();
  }));
});
