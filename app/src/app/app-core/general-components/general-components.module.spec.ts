import { GeneralComponentsModule } from './general-components.module';

describe('GeneralComponentsModule', () => {
  let generalComponentsModule: GeneralComponentsModule;

  beforeEach(() => {
    generalComponentsModule = new GeneralComponentsModule();
  });

  it('should create an instance', () => {
    expect(generalComponentsModule).toBeTruthy();
  });
});
