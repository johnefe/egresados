import { ConvocatoriasModule } from './convocatorias.module';

describe('ConvocatoriasModule', () => {
  let convocatoriasModule: ConvocatoriasModule;

  beforeEach(() => {
    convocatoriasModule = new ConvocatoriasModule();
  });

  it('should create an instance', () => {
    expect(convocatoriasModule).toBeTruthy();
  });
});
