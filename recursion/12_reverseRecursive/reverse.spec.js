const reverse = require('./reverse');

describe('reverse', () => {
  test('reverses a standard word', () => {
    expect(reverse('hello')).toBe('olleh');
  });

  test('handles a single character', () => {
    expect(reverse('a')).toBe('a');
  });

  test('handles an empty string (The Base Case)', () => {
    expect(reverse('')).toBe('');
  });

  test('reverses a string with spaces and capitals', () => {
    expect(reverse('Open AI')).toBe('IA nepO');
  });
});