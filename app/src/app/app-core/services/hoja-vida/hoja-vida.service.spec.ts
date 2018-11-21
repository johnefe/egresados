import { TestBed } from '@angular/core/testing';

import { HojaVidaService } from './hoja-vida.service';

describe('HojaVidaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HojaVidaService = TestBed.get(HojaVidaService);
    expect(service).toBeTruthy();
  });
});
