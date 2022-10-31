import Queue from './Queue';

describe('queue based on a doubly linked list', () => {
  test('should return the first element of a queue', () => {
    const queue = new Queue();
    queue.push(10);
    queue.push(11);
    queue.push(12);

    expect(queue.head).toBe(10);
  });

  test('should return null when getting empty queue\'s head', () => {
    const queue = new Queue();
    expect(queue.head).toBe(null);
  });

  test('should return the last element of a queue', () => {
    const queue = new Queue();
    queue.push(10);
    queue.push(11);
    queue.push(12);

    expect(queue.tail).toBe(12);
  });

  test('should return null when getting empty queue\'s tail', () => {
    const queue = new Queue();
    expect(queue.tail).toBe(null);
  });

  test('should add the new element to the queue', () => {
    const queue = new Queue();
    queue.push(10);
    queue.push(11);
    queue.push(12);

    expect(queue.head).toBe(10);
    expect(queue.tail).toBe(12);
  });

  test('should remove the first element from the queue', () => {
    const queue = new Queue();
    queue.push(10);
    queue.push(11);
    queue.push(12);

    expect(queue.pop()).toBe(10);
    expect(queue.head).toBe(11);
  });

  test('should throw an exception when trying to remove elements from an empty queue', () => {
    const queue = new Queue();
    expect(() => queue.pop()).toThrow('list is empty, nothing to remove!');
  });
})
