class StackUsingQueue {
  constructor() {
    this._queue = new QueueImplementation();
  }

  // O(N)
  push(elm) {
    const curSize = this.queue.length;
    this._queue.enqueue(elm);

    // Rotate the queue to move the new element to the front
    for (let i = 0; i < curSize; i++) {
      this._queue.enqueue(this._queue.dequeue());
    }
    return this._queue.peek();
  }

  pop() {
    return this._queue.dequeue();
  }

  top() {
    return this._queue.peek();
  }

  get length() {
    return this._queue.length;
  }

  toArray() {
    return this._queue.toArray();
  }
}
