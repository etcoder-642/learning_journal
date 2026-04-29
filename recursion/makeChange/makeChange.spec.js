const makeChange = require('./makeChange');

describe('makeChange', () => {
  test('change for 1 cent', () => {
    expect(makeChange(1)).toEqual([[1]]);
  });

  test('change for 5 cents', () => {
    const output = [[1, 1, 1, 1, 1], [5]];
    expect(makeChange(5)).toEqual(expect.arrayContaining(output));
  });

  test('change for 6 cents', () => {
    const output = [[1, 1, 1, 1, 1, 1], [1, 5], [5, 1]];
    expect(makeChange(6)).toEqual(expect.arrayContaining(output));
  });
});