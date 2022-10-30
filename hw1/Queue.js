import { DoublyLinkedList } from "./DoublyLinkedList/DoublyLinkedList.js";

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
