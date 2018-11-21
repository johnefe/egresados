import { TestBed } from '@angular/core/testing';

import { TalenLoginGuardService } from './talen-login-guard.service';

describe('TalenLoginGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TalenLoginGuardService = TestBed.get(TalenLoginGuardService);
    expect(service).toBeTruthy();
  });
});
