# Queue

Class for building a queue based on a doubly linked list.

## head
Gets the first element of a queue.

```javascript
const queue = new Queue();

queue.push(10);

console.log(queue.head);  // 10
```

## tail
Gets the last element of a queue.

```javascript
const queue = new Queue();

queue.push(10);
queue.push(11);

console.log(queue.tail);  // 11
```

## push(value)
Adds a new element with a given value to the end of a queue.
```javascript
const queue = new Queue();

queue.push(10);
queue.push(11);

console.log(queue.head);  // 10
console.log(queue.tail);  // 12
```

## pop()
Removes the first element of a queue and returns it.
```javascript
const queue = new Queue();

queue.push(10);
queue.push(11);
queue.push(12);

console.log(queue.pop()); // 10
console.log(queue.head);  // 11

console.log(queue.pop()); // 11
console.log(queue.pop()); // 12
console.log(queue.pop()); // Exception
```
