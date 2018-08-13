import { SellorModule } from './sellor.module';

describe('SellorModule', () => {
  let sellorModule: SellorModule;

  beforeEach(() => {
    sellorModule = new SellorModule();
  });

  it('should create an instance', () => {
    expect(sellorModule).toBeTruthy();
  });
});
