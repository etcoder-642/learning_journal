const getGuestLists = require('./guestList');

describe('getGuestLists', () => {
  test('returns an empty list inside an array for an empty input', () => {
    // If you have no friends, the only possible guest list is "nobody"
    expect(getGuestLists([])).toEqual([[]]);
  });

  test('handles a single friend', () => {
    const input = ['Alice'];
    const output = [[], ['Alice']];
    // Order doesn't strictly matter in sets, but typically we see 'empty' then 'included'
    expect(getGuestLists(input)).toEqual(expect.arrayContaining(output));
    expect(getGuestLists(input).length).toBe(2);
  });

  test('handles two friends', () => {
    const input = ['A', 'B'];
    const output = [[], ['A'], ['B'], ['A', 'B']];
    expect(getGuestLists(input)).toEqual(expect.arrayContaining(output));
    expect(getGuestLists(input).length).toBe(4);
  });

  test('handles three friends (The Power Set)', () => {
    const input = ['A', 'B', 'C'];
    const output = [
      [], ['A'], ['B'], ['C'], 
      ['A', 'B'], ['A', 'C'], ['B', 'C'], 
      ['A', 'B', 'C']
    ];
    expect(getGuestLists(input)).toEqual(expect.arrayContaining(output));
    expect(getGuestLists(input).length).toBe(8); // 2^3 combinations
  });
});