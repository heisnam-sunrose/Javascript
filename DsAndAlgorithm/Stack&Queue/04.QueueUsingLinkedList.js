class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class QueueImplementation {
  constructor() {
    this._start = null;
    this._end = null;
    this._curSize = 0;
  }

  enqueue(elm) {
    const newNode = new Node(elm);

    if (this.isEmpty()) {
      this._start = this._end = newNode;
    } else {
      this._end.next = newNode;
      this._end = newNode;
    }

    this._curSize++;
    return elm;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Queue is Empty");

    const popped = this._start.data;
    this._start = this._start.next;

    if (!this._start) this._end = null;

    this._curSize--;

    return popped;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this._start.data;
  }

  isEmpty() {
    // return this._start === null && this._end == null;
    return this._curSize === 0;
  }

  get length() {
    return this._curSize;
  }

  toArray() {
    let result = [];
    let temp = this._start;
    while (temp) {
      result.push(temp.data);
      temp = temp.next;
    }
    return result;
  }
}
