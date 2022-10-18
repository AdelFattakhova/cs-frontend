import { DoublyLinkedList } from "./DoublyLinkedList.js";

export class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
    this.head = null;
    this.tail = null;
  }

  push(value) {
    this.list.addEnd(value);
    if (this.head === null) {
      this.head = this.list.first.value;
    }
    this.tail = this.list.last.value;
  }

  pop() {
    const removed = this.list.removeStart();
    this.head = this.list.first?.value;
    
    if (removed.value) return removed.value;
    throw(new Error(removed));
  }
}

const queue = new Queue();

queue.push(10);
queue.push(11);
queue.push(12);

// console.log(queue.head);  // 10

// console.log(queue.pop()); // 10

// console.log(queue.head);  // 11
// console.log(queue.tail);  // 12

// console.log(queue.pop()); // 11
// console.log(queue.pop()); // 12
// console.log(queue.pop()); // Exception
