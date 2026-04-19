const letterCombinations = require('./letterCombinations');

describe('letterCombinations', () => {
  test('combines two small arrays', () => {
    const input = [['a', 'b'], ['c']];
    expect(letterCombinations(input)).toEqual(['a c', 'b c']);
  });

  test('handles three levels of nesting', () => {
    const input = [['small', 'big'], ['red'], ['car', 'bike']];
    const output = [
      'small red car', 
      'small red bike', 
      'big red car', 
      'big red bike'
    ];
    expect(letterCombinations(input)).toEqual(output);
  });

  test('returns empty array if input is empty', () => {
    expect(letterCombinations([])).toEqual([]);
  });
});