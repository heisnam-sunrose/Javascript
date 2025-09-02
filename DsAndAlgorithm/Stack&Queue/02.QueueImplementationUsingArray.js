/*
  Queue implementation using Array
*/

class QueueImplementation {
  constructor(size = 10) {
    this._items = new Array(size);
    this._start = null;
    this._end = null;
    this._curSize = 0;
    this._size = size;
  }

  enqueue(element) {
    if (this.isFull()) throw new Error("Queue is full");

    if (this.isEmpty()) {
      this._start = 0;
      this._end = 0;
    } else this._end = ++this._end % this._size;

    this._items[this._end] = element;
    this._curSize += 1;
    // this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Queue is empty");

    const el = this._items[this._start];
    this._items[this._start] = undefined;

    if (this.length === 1) {
      this._start = null;
      this._end = null;
    } else this._start = ++this._start % this._size;

    this._curSize -= 1;
    return el;
    // return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) throw new Error("Queue is empty");

    return this._items[this._start];
  }

  isEmpty() {
    return this._curSize == 0;
    // return this.start == -1;
    // return this.items.length === 0;
  }

  isFull() {
    return this._curSize == this._size;
  }

  get length() {
    return this._curSize;
    // return this.end + 1;
    // return this.items.length;
  }

  toArray() {
    if (this.isEmpty()) return [];
    const result = [];
    for (let i = 0; i < this._curSize; i++) {
      const index = (this._start + i) % this._size;
      result.push(this._items[index]);
    }
    return result;
  }

  toString() {
    return this.toArray().join(", ");
  }
}

// Circular Queue Implementation
class QueueImp {
  constructor(size) {
    if (!size) throw new Error("Provide Queue size");
    this._size = size;
    this._items = new Array(size);
    this._front = -1;
    this._rear = -1;
  }

  enqueue(elm) {
    if (this.isFull()) throw new Error("Queue is full");

    if (this.isEmpty()) {
      this._front = 0;
      this._rear = 0;
    } else {
      this._rear = (this._rear + 1) % this._size;
    }

    this._items[this._rear] = elm;

    return elm;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Queue is Empty");
    const elm = this._items[this._front];

    if (this._front == this._rear) {
      this._front = -1;
      this._rear = -1;
    } else {
      this._front = (this._front + 1) % this._size;
    }

    return elm;
  }

  peek() {
    if (this.isEmpty()) throw new Error("Queue is Empty");

    return this._items[this._front];
  }

  isFull() {
    return (this._rear + 1) % this._size === this._head;
  }

  isEmpty() {
    return this._front === -1;
  }
}
