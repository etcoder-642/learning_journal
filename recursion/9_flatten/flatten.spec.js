const flatten = require('./flatten');

describe('flatten', () => {
  test('returns the same array if it is already flat', () => {
    const input = [1, 2, 3];
    expect(flatten(input)).toEqual([1, 2, 3]);
  });

  test('flattens a single level of nesting', () => {
    const input = [1, [2, 3], 4];
    expect(flatten(input)).toEqual([1, 2, 3, 4]);
  });

  test('flattens multiple levels of nesting', () => {
    const input = [1, [2, [3, 4], 5], 6];
    expect(flatten(input)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('handles empty arrays within nested structures', () => {
    const input = [1, [], [2, []], 3];
    expect(flatten(input)).toEqual([1, 2, 3]);
  });

  test('works with deeply nested single elements', () => {
    const input = [[[[[1]]]]];
    expect(flatten(input)).toEqual([1]);
  });
});