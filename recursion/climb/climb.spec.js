const climbPaths = require('./climb');

describe('climbPaths', () => {
  test('climb 1 step', () => {
    expect(climbPaths(1)).toEqual([[1]]);
  });

  test('climb 2 steps', () => {
    const output = [[1, 1], [2]];
    expect(climbPaths(2)).toEqual(expect.arrayContaining(output));
  });

  test('climb 3 steps', () => {
    const output = [[1, 1, 1], [1, 2], [2, 1]];
    expect(climbPaths(3)).toEqual(expect.arrayContaining(output));
  });
});