import {DoublyLinkedList} from '../hw1/DoublyLinkedList.js';

class DynamicArray extends DoublyLinkedList {
  constructor(size) {
    super();
    this.length = 0;
    this.size = size;
  }

  add(value) {
    const lastListElement = this.last;

    if (lastListElement?.value.length < this.size) {
      lastListElement.value.push(value);
    } else {
      this.addEnd([value]);
    }

    this.length++;
  }

  get(index) {
    let currentElement = this.first;
    const iterations = Math.floor(index / this.size)

    if (iterations > 0) {
      for (let i = 0; i < iterations; i++) {
        currentElement = currentElement.next;
      }
    }

    return currentElement.value[index % this.size];
  }
}

const arr = new DynamicArray(2 /* Размер фиксированного массива в списке */);

arr.add(1);
arr.add(2);
arr.add(3);
arr.add(4);
arr.add(5);
arr.add(6);
arr.add(7);
arr.add(8);
arr.add(9);

console.log(arr.length);  // 5
console.log(arr);

console.log(arr.get(0));  // 1
console.log(arr.get(1));  // 2
console.log(arr.get(4));  // 5
console.log(arr.get(6));  // 7
console.log(arr.get(8));  // 9

for (const value of arr) {
  console.log(value);
}
