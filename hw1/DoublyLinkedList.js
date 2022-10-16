export class DoublyLinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  addEnd(value) {
    const newElement = {
      value, 
      next: null,
      prev: this.last,
    };

    if (this.first === null) {
      this.first = newElement;
    } else if (this.last !== null) {
      this.last.next = newElement;
    }

    this.last = newElement;
  }

  removeEnd() {
    const removed = this.last;

    if (this.last === null) return 'list is empty, nothing to remove!';

    if (this.last.prev === null) {
      this.first = null;
      this.last = null;
    } else {
      this.last = this.last.prev;
      this.last.next = null;
    }

    return removed;
  }

  addStart(value) {
    const newElement = {
      value, 
      next: this.first,
      prev: null,
    }

    this.first.prev = newElement;
    this.first = newElement;
  }

  removeStart() {
    const removed = this.first;

    if (this.first === null) return 'list is empty, nothing to remove!';

    if (this.first.next === null) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      this.first.prev = null;
    }

    return removed;
  }

  [Symbol.iterator] = function() {
    this.current = this.first;
    return this;
  }

  next() {
    if (this.current) {
      const currentValue = this.current.value;
      this.current = this.current.next;
      return { done: false, value: currentValue };
    } else {
      return { done: true };
    }
  }
}

var list = DoublyLinkedList();

list.addEnd(2);
list.addEnd(3);
list.addStart(1);
list.addEnd(4);
list.addEnd(5);
list.addEnd(6);

console.log('--------------');
console.log(list.first.value); // 1
console.log(list.last.value); // 6
console.log(list.first.next.value); // 2
console.log(list.first.next.prev.value); // 1

list.removeEnd();
list.removeStart();
list.removeEnd();
list.removeStart();

console.log('--------------');
console.log(list.first.value); // 3
console.log(list.last.value); // 4
console.log(list.first.next.value); // 4
console.log(list.first.next.prev.value); // 3
