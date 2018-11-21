import { CeremoniaModule } from './ceremonia.module';

describe('CeremoniaModule', () => {
  let ceremoniaModule: CeremoniaModule;

  beforeEach(() => {
    ceremoniaModule = new CeremoniaModule();
  });

  it('should create an instance', () => {
    expect(ceremoniaModule).toBeTruthy();
  });
});
