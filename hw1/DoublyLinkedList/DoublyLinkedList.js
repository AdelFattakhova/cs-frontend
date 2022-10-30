class DoublyLinkedList {
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
    } else {
      this.last.next = newElement;
    }

    this.last = newElement;
  }

  removeEnd() {
    const removed = this.last;

    if (this.last === null) throw new Error('list is empty, nothing to remove!');

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

    if (this.first !== null) {
      this.first.prev = newElement;
    }

    this.first = newElement;
  }

  removeStart() {
    const removed = this.first;

    if (this.first === null) throw new Error('list is empty, nothing to remove!');

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

module.exports = DoublyLinkedList;
