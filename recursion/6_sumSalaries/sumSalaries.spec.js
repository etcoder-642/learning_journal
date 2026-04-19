const sumSalaries = require('./sumSalaries');


describe('sumSalaries', () => {
  test('sums a simple department', () => {
    expect(sumSalaries({ a: 100, b: 200 })).toBe(300);
  });

  test('sums nested departments', () => {
    const data = { 
      fin: { manager: 1000, staff: 500 }, 
      hr: 800 
    };
    expect(sumSalaries(data)).toBe(2300);
  });

  test('returns 0 for empty departments', () => {
    expect(sumSalaries({})).toBe(0);
  });
});