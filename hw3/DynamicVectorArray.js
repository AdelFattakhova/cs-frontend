class DynamicVectorArray {
  constructor(capacity) {
    this.capacity = capacity;
    this.length = 0;
    this.array = [];
  }

  add(value) {
    if (this.length < this.capacity) {
      this.array[this.length] = value;
    } else {
      const prevArray = [...this.array];

      this.capacity *= 2;
      this.array = new Array(this.capacity);

      this.array.splice(0, this.length, ...prevArray);
      this.array[this.length] = value;
    }

    this.length++;
  }

  get(index) {
    return this.array[index];
  }
}

const arr = new DynamicVectorArray(2);

arr.add(1);
arr.add(2);
arr.add(3);
arr.add(4);
arr.add(5);

console.log(arr);

console.log(arr.get(0));  // 1
console.log(arr.get(1));  // 2
console.log(arr.get(4));  // 5
