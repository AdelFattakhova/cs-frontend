import { Queue } from "./Queue/Queue.js";

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
