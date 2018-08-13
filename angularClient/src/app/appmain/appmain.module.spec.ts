import { AppmainModule } from './appmain.module';

describe('AppmainModule', () => {
  let appmainModule: AppmainModule;

  beforeEach(() => {
    appmainModule = new AppmainModule();
  });

  it('should create an instance', () => {
    expect(appmainModule).toBeTruthy();
  });
});
