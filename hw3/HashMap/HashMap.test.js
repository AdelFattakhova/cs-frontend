import HashMap from "./HashMap";

describe('hash map', () => {
  // Tests for hash function

  test('hash function should generate keys under hash array size', () => {
    const map = new HashMap(17);
    const hashedKey = map._hashFunc(356);
    expect(hashedKey).toBeLessThanOrEqual(17);
  });
  
  test('hash function should process keys of any type', () => {
    const map = new HashMap(17);
    const hashedNumber = map._hashFunc(231);
    expect(hashedNumber).toBeLessThanOrEqual(17);

    const hashedString = map._hashFunc('fam');
    expect(hashedString).toBeLessThanOrEqual(17);

    const hashedObj = map._hashFunc({ a: 'b' });
    expect(hashedObj).toBeLessThanOrEqual(17);
  });

  // Tests for hash map itself

  test('should add new element to hash map', () => {
    const map = new HashMap(17);
    map.set('foo', 'bar');
    map.set(10, 'bla');

    expect(map.hashArray).toContainEqual({ foo: 'bar' });
    expect(map.hashArray).toContainEqual({ 10: 'bla' });
  });

  test('should get an element from hash map by key', () => {
    const map = new HashMap(17);
    map.set('foo', 'bar');
    map.set(10, 'bla');

    expect(map.get('foo')).toEqual('bar');
    expect(map.get(10)).toEqual('bla');
  });

  test('should throw an exception if there\'s no element with requested key', () => {
    const map = new HashMap(17);
    map.set('foo', 'bar');

    expect(() => map.get(44)).toThrow('Item with such a key was not found');
  });

  test('should resolve collisions using chain method', () => {
    const map = new HashMap(17);
    map.set(10, 'bar');
    map.set(27, 'bla');
    map.set(61, 'jem');
    map.set(13, 'foo');

    expect(map.get(10)).toEqual('bar');
    expect(map.get(27)).toEqual('bla');
    expect(map.get(61)).toEqual('jem');
    expect(map.get(13)).toEqual('foo');

    expect(() => map.get(44)).toThrow('Item with such a key was not found');
    expect(() => map.get('foo')).toThrow('Item with such a key was not found');
  });

  // test('should extract keys from hash map', () => {
  //   const map = new HashMap(31);

  //   map.set('foo', 'bar');
  //   map.set(10, 'bla');
  //   map.set(41, 'bal');
  //   map.set(72, 'lab');
  //   map.set({ a: 1 }, 'grab');

  //   expect([...map.keys()]).toContain('10', '41', '72', 'foo', '{"a":1}');
  //   expect([...map.keys()].length).toEqual(5);
  // });
});
