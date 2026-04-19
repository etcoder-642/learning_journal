const deepCount = require('./deepCount');

describe('deepCount', () => {
  test('counts simple elements', () => {
    expect(deepCount([1, 2, 3])).toBe(3);
  });
  test('counts nested arrays as an element + their contents', () => {
    expect(deepCount([1, [2, 3]])).toBe(4); 
    // 1 + (the array) + 2 + 3
  });
  test('handles multiple levels of nesting', () => {
    expect(deepCount(["a", ["b", ["c"]]])).toBe(5);
  });
});