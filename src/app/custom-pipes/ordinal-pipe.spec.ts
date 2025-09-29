import { AgePipe, OrdinalPipe, RomanPipe, SalutationPipe, Search } from './ordinal-pipe';

describe('OrdinalPipe', () => {
  it('create an instance', () => {
    const pipe = new OrdinalPipe();
    expect(pipe).toBeTruthy();
  });
});


describe('RomanPipe', () => {
  it('create an instance', () => {
    const pipe = new RomanPipe();
    expect(pipe).toBeTruthy();
  });
});


describe('AgePipe', () => {
  it('create an instance', () => {
    const pipe = new AgePipe();
    expect(pipe).toBeTruthy();
  });
});


describe('SearchEmployee', () => {
  it('create an instance', () => {
    const pipe = new Search();
    expect(pipe).toBeTruthy();
  });
});






describe('SalutationPipe', () => {
  it('create an instance', () => {
    const pipe = new SalutationPipe();
    expect(pipe).toBeTruthy();
  });
});

