import binarySearch from "./binary-search";

describe('binary search', () => {
  test('binary search return the index of the element', () => {
    const index = binarySearch(4, [-432, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6, 98]);
    expect(index).toBe(8);
  });

  test('binary search throws an exception when no element is present', () => {
    expect(() => binarySearch(7, [-432, 3, 4, 5, 6, 98])).toThrow('The given array doesn\'t contain such an element');
  });

  test('binary search throws an exception when array is empty', () => {
    expect(() => binarySearch(7, [])).toThrow('The given array doesn\'t contain such an element');
  });

  test('binary search returns the index of the element in array of 1 element', () => {
    const index = binarySearch(-432, [-432]);
    expect(index).toBe(0);
  });
});
