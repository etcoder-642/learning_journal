const multiClimb = require('./multiClimb');

describe('multiClimb', () => {
  test('handles multiple jump options', () => {
    const jumps = [1, 3];
    const output = [[1, 1, 1, 1], [1, 3], [3, 1]];
    const result = multiClimb(4, jumps);
    
    expect(result).toEqual(expect.arrayContaining(output));
    expect(result.length).toBe(3);
  });

  test('handles a single large jump', () => {
    const jumps = [1, 2, 5];
    const result = multiClimb(5, jumps);
    // Should include the single [5] path
    expect(result).toContainEqual([5]);
  });
});