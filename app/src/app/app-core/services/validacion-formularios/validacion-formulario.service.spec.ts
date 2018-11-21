import { TestBed } from '@angular/core/testing';

import { ValidacionFormularioService } from './validacion-formulario.service';

describe('ValidacionFormularioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidacionFormularioService = TestBed.get(ValidacionFormularioService);
    expect(service).toBeTruthy();
  });
});
