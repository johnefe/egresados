/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MensajeService } from './mensaje.service';

describe('MensajeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MensajeService]
    });
  });

  it('should ...', inject([MensajeService], (service: MensajeService) => {
    expect(service).toBeTruthy();
  }));
});
