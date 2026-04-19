const findPathByKey = require('./findPathByKey');

describe('findPathByKey', () => {
  const data = {
    id: 1,
    info: { id: 2, label: "test" },
    items: [
      { id: 3, label: "inner" },
      { id: 4, children: [{ id: 5 }] }
    ]
  };

  test('finds keys at multiple levels', () => {
    expect(findPathByKey(data, 'id').sort()).toEqual([1, 2, 3, 4, 5]);
  });

  test('returns an empty array if key does not exist', () => {
    expect(findPathByKey(data, 'nonexistent')).toEqual([]);
  });

  test('works with just a simple object', () => {
    expect(findPathByKey({ a: 1 }, 'a')).toEqual([1]);
  });
});