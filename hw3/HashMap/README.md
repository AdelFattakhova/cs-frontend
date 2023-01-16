# Hash Map

Class for building a hash map. Constructor receives the size of the hash array. Simple hashing algorithm is used for now:
- for numbers the residual of dividing by the hash array size is used as an index
- for strings each character's code is multiplied by 26 powered by character's index in the given string; these results are then summed and the sum is divided by the hash array size; the residual is used as an index
- for other data types, random index is generated

To resolve collisions, the chains methos is implemented.

## set(key, value)
Adds new value to the hash map.

```javascript
const map = HashMap(31);

map.set('foo', 'bar');
map.set(10, 'bla');

```

## get(key)
Gets a value from a hash map with a given key.

```javascript
const map = HashMap(31);

map.set('foo', 'bar');
map.set(10, 'bla');

console.log(map.get('foo')); // 'bar'
console.log(map.get(10));    // 'bla'
```
