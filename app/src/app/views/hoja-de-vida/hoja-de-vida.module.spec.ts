import { HojaDeVidaModule } from './hoja-de-vida.module';

describe('HojaDeVidaModule', () => {
  let hojaDeVidaModule: HojaDeVidaModule;

  beforeEach(() => {
    hojaDeVidaModule = new HojaDeVidaModule();
  });

  it('should create an instance', () => {
    expect(hojaDeVidaModule).toBeTruthy();
  });
});
