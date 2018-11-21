import { TestBed } from '@angular/core/testing';

import { NucleoFamiliarHvService } from './nucleo-familiar-hv.service';

describe('NucleoFamiliarHvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NucleoFamiliarHvService = TestBed.get(NucleoFamiliarHvService);
    expect(service).toBeTruthy();
  });
});
