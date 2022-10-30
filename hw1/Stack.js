class Stack {
  constructor(size = 0) {
    this.maxSize = size;
    this.stackArray = new Array(this.maxSize);
    this.top = -1;
  }

  get head() {
    return this.stackArray[this.top];
  }

  push(value) {
    if (this.stackArray[this.maxSize - 1] === undefined) {
      this.top++;
      this.stackArray[this.top] = value;
    } else {
      throw new Error('New value was not added. Stack is full.')
    }
  }

  pop() {
    if (this.top < 0) {
      throw new Error('Stack is already empty!');
    };

    const removed = this.stackArray[this.top];
    delete this.stackArray[this.top];
    this.top--;

    return removed;
  }
}
