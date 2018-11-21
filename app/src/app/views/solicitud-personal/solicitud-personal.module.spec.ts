import { SolicitudPersonalModule } from './solicitud-personal.module';

describe('SolicitudPersonalModule', () => {
  let solicitudPersonalModule: SolicitudPersonalModule;

  beforeEach(() => {
    solicitudPersonalModule = new SolicitudPersonalModule();
  });

  it('should create an instance', () => {
    expect(solicitudPersonalModule).toBeTruthy();
  });
});
