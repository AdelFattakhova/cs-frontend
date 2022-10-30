# Data and data types. Typing in programming languages. Fundamental data structures.
## Tasks

### 1. Implement a Doubly Linked List; make this list iterable
Usage example:
```javascript
const list = new DoublyLinkedList();

list.addEnd(2);
list.addEnd(3);
list.addStart(1);
list.addEnd(4);
list.addEnd(5);
list.addEnd(6);

list.removeEnd();
list.removeStart();
list.removeEnd();
list.removeStart();

console.log(list.first.value); // 3
console.log(list.last.value); // 4
console.log(list.first.next.value); // 4
console.log(list.first.next.prev.value); // 3
```

### 2. Implement a Queue based on a Linked List
Usage example:
```javascript
const queue = new Queue();

queue.push(10);
queue.push(11);
queue.push(12);

console.log(queue.head);  // 10
console.log(queue.tail);  // 12

console.log(queue.pop()); // 10
console.log(queue.head);  // 11

console.log(queue.pop()); // 11
console.log(queue.pop()); // 12
console.log(queue.pop()); // Exception
```
### 3. Implement a Deque
Usage example:
```javascript
const deque = new Deque();

deque.addEnd(10);
deque.addStart(11);
deque.addEnd(12);

console.log(deque.removeEnd()); // 12
console.log(deque.head); // 11
console.log(deque.tail); // 10
console.log(deque.removeStart()); // 11
console.log(deque.head); // 10
console.log(deque.removeEnd()); // 10
console.log(deque.removeEnd()); // Exception
```
### 4. Implement a Stack based on a fixed-length Array
Usage example:
```javascript
const stack = new Stack(3);

stack.push(10);
stack.push(11);
stack.push(12);

console.log(stack.head);  // 12
console.log(stack.pop()); // 12
console.log(stack.head);  // 11

console.log(stack.pop()); // 11
console.log(stack.pop()); // 10
console.log(stack.pop()); // Exception
_________________________________

const stack = new Stack(2);

stack.push(10);
stack.push(11);
stack.push(12); // Exception

```
### 5. Implement a Structure based on an Array
Usage example:
```javascript
const jackBlack = new Structure(['name', 'lastName', 'age']);

jackBlack.set('name', 'Jack');
jackBlack.set('lastName', 'Black');
jackBlack.set('age', 53);

console.log(jackBlack.get('name')); // 'Jack'
```
