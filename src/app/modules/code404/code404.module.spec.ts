import { Code404Module } from './code404.module';

describe('Code404Module', () => {
  let code404Module: Code404Module;

  beforeEach(() => {
    code404Module = new Code404Module();
  });

  it('should create an instance', () => {
    expect(code404Module).toBeTruthy();
  });
});
