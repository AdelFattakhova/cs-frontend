import { Queue } from "./Queue.js";

class Deque extends Queue {
  constructor() {
    super();
    this.removeStart = this.pop;
    this.addEnd = this.push;
  }

  addStart(value) {
    this.list.addStart(value);
    this.head = this.list.first.value;
  }

  removeEnd() {
    const removed = this.list.removeEnd();
    this.tail = this.list.last?.value;

    if (removed.value) return removed.value;

    throw new Error(removed);
  }
}

const deque = new Deque();

deque.addEnd(10);
deque.addStart(11);
deque.addEnd(12);

console.log(deque.removeEnd());   // 12
console.log(deque.head); // 11
console.log(deque.tail); // 10
console.log(deque.removeStart()); // 11
console.log(deque.head); // 10
console.log(deque.removeEnd());   // 10
console.log(deque.removeEnd());   // Exception
