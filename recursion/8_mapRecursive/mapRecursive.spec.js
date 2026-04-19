const mapRecursive = require('./mapRecursive');

describe('mapRecursive', () => {
  test('doubles numbers in a flat object', () => {
    const input = { a: 1, b: 2, c: 3 };
    const output = { a: 2, b: 4, c: 6 };
    expect(mapRecursive(input)).toEqual(output);
  });

  test('doubles numbers in a deeply nested object', () => {
    const input = {
      a: 5,
      b: {
        c: 10,
        d: { e: 20 }
      }
    };
    const output = {
      a: 10,
      b: {
        c: 20,
        d: { e: 40 }
      }
    };
    expect(mapRecursive(input)).toEqual(output);
  });

  test('leaves non-number values alone', () => {
    const input = { a: 10, b: "hello", c: true };
    const output = { a: 20, b: "hello", c: true };
    expect(mapRecursive(input)).toEqual(output);
  });

  test('handles arrays inside objects (The Bonus Challenge)', () => {
    const input = { a: [1, 2], b: { c: [3] } };
    const output = { a: [2, 4], b: { c: [6] } };
    expect(mapRecursive(input)).toEqual(output);
  });

  test('returns a NEW object (does not mutate the original)', () => {
    const input = { a: 1 };
    const result = mapRecursive(input);
    result.a = 500; 
    expect(input.a).toBe(1); // Original should stay 1
  });
});