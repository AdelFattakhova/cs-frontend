import DoublyLinkedList from "../../hw1/DoublyLinkedList/DoublyLinkedList.js";

export default class HashMap {
  constructor(size) {
    this.arraySize = size;
    this.hashArray = new Array(size);
    this.firstElementIndex = size - 1;
    this.lastElementIndex = 0;
  }

  _hashFunc(key) {
    let hashedKey;

    if (!isNaN(key)) {
      hashedKey = key % this.arraySize;
    } else if (typeof key === 'string') {
      hashedKey = this._hashString(key);
    } else {
      hashedKey = this._randomNum();
    }

    return hashedKey;
  }

  _randomNum() {
    return Math.round(Math.random() * this.arraySize);
  }

  _hashString(str) {
    const hashSum = str.split('').reduce((hash, char, index) => {
      hash += (char.charCodeAt(0) * (26 ** index));
      return hash;
    }, 0);

    return hashSum % this.arraySize;
  }
  
  set(key, value) {
    const hashedKey = this._hashFunc(key);
    if (typeof key === 'object') {
      key = JSON.stringify(key);
    }
    const newElement = {
      [key]: value
    };

    if (this.hashArray[hashedKey]) {
      if (this.hashArray[hashedKey].first) {
        this.hashArray[hashedKey].addStart(newElement);
      } else {
        const currValue = this.hashArray[hashedKey];
        const linkedList = new DoublyLinkedList();

        this.hashArray[hashedKey] = linkedList;
        linkedList.addStart(currValue);
        this.hashArray[hashedKey].addStart(newElement);
      }
    } else {
      this.hashArray[hashedKey] = newElement;
    }

    this.firstElementIndex = hashedKey < this.firstElementIndex ? hashedKey : this.firstElementIndex;
    this.lastElementIndex = hashedKey > this.lastElementIndex ? hashedKey : this.lastElementIndex;
  }

  get(key) {
    const hashItem = this.hashArray[this._hashFunc(key)];
    let searchedValue;

    if (hashItem?.first) {
      for (let pair of hashItem) {
        if (Object.keys(pair)[0] === `${key}`) {
          searchedValue = pair[key];
          break;
        }
      }
    } else {
      searchedValue = hashItem?.[key];
    }

    if (searchedValue !== undefined) {
      return searchedValue;
    } else {
      throw new Error('Item with such a key was not found');
    }
  }

  [Symbol.iterator] = function() {
    this.index = this.firstElementIndex;
    this.current = this.hashArray[this.index];
    return this;
  }

  // TODO: finish debugging and make this method work correctly
  next() {
    if (this.index <= this.lastElementIndex) {
      let currentItem = this.current;
      // console.log(this.index);
      // console.log(currentItem);

      if (currentItem.first) {
        this.current = currentItem.first.next;
        currentItem = currentItem.first;
      }

      console.log(currentItem);
      if (currentItem.next) {
        this.current = currentItem.next.value;
        console.log('this.current when currentItem has next');
        console.log(this.current);
        currentItem = currentItem.value;
      } else {
        this.index++;
        while (typeof this.hashArray[this.index] === 'undefined' && this.index <= this.lastElementIndex) {
          this.index++;
          // console.log(this.index);
          // console.log(this.hashArray[this.index]);
        }
        this.current = this.hashArray[this.index];
      }

      // console.log(Object.keys(currentItem)[0]);
      return { done: false, value: Object.keys(currentItem)[0] };
    } else {
      return { done: true };
    }
  }

  keys() {
    return this;
  }
}

const map = new HashMap(31);

map.set('foo', 'bar');
map.set(10, 'bla');
map.set(41, 'bal');
map.set(72, 'lab');
map.set({ a: 1 }, 'grab');

console.log(map);
console.log([...map.keys()]); // expect([...map.keys()]).toContain('10', '41', '72', 'foo', '{"a":1}');
