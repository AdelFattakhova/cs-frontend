 # Doubly Linked List
 Class for building a linked list data structure. One node contains its value as `value`, link to the next node as `next` property, and link to the previous node as `prev` property.
 ```javascript
{
  value: 1,
  next: {
    value: 2,
    next: null,
    prev: {
      value: 1,
      next: ...,
      prev: null,
    }
  },
  prev: null,
}
 ```

## first
First node of a doubly linked list.

```javascript
const list = new DoublyLinkedList();

list.addEnd(5);

console.log(list.first.value); // 5
```

## last
Last node of a doubly linked list.

```javascript
const list = new DoublyLinkedList();

list.addEnd(1);
list.addEnd(2);
list.addEnd(3);

console.log(list.last.value); // 3
```

## addEnd(value)
Adds node with a given value to the end of the doubly linked list.

```javascript
const list = new DoublyLinkedList();

list.addEnd(1);
list.addEnd(2);
list.addEnd(3);

console.log(list.first.value); // 1
console.log(list.last.value); // 3
```

## addStart(value)
Adds node with a given value to the beginning of the doubly linked list.

```javascript
const list = new DoublyLinkedList();

list.addStart(1);
list.addStart(2);
list.addStart(3);

console.log(list.first.value); // 3
console.log(list.last.value); // 1
```

## removeEnd()
Removes last node from the doubly linked list and returns it.

```javascript
const list = new DoublyLinkedList();

list.addEnd(1);
list.addEnd(2);
list.addEnd(3);

console.log(removeEnd()); // 3
console.log(list.last.value); // 2
```

## removeStart()
Removes first node from the doubly linked list and returns it.

```javascript
const list = new DoublyLinkedList();

list.addEnd(1);
list.addEnd(2);
list.addEnd(3);

console.log(removeStart()); // 1
console.log(list.first.value); // 2
```

## The list is iterable and its nodes can be iterated over in a cycle.
