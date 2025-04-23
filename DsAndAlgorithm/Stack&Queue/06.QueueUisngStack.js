class QueueUsingStack {
  constructor() {
    this._stack1 = new StackImplementation();
    this._stack2 = new StackImplementation();
  }

  enqueue(elm) {
    const curSize = this._stack1.length;

    for (let i = 0; i < curSize; i++) {
      this._stack2.push(this._stack1.pop());
    }

    this._stack1.push(elm);

    for (let i = 0; i < curSize; i++) {
      this._stack1.push(this._stack2.pop());
    }
  }
}

/*
  Lazy reversal (only transfer when stack2 is empty) 
*/

class QueueUsingStackV2 {
  constructor() {
    this._stack1 = new StackImplementation();
    this._stack2 = new StackImplementation();
  }

  enqueue(elm) {
    this._stack1.push(elm);
  }

  peek() {
    _transferIfNeeded();

    if (this._stack2.isEmpty()) {
      throw new Error("Queue is empty");
    }

    return this._stack2.top();
  }

  dequeue() {
    _transferIfNeeded();

    if (this._stack2.isEmpty()) {
      throw new Error("Queue is empty");
    }

    return this._stack2.pop();
  }

  _transferIfNeeded() {
    if (this._stack2.isEmpty()) {
      while (!this._stack1.isEmpty()) {
        this._stack2.push(this._stack1.pop());
      }
    }
  }

  isEmpty() {
    return this._stack1.isEmpty() && this._stack2.isEmpty();
  }

  get length() {
    return this._stack1.length + this._stack2.length;
  }

  toArray() {
    const tempStack = new StackImplementation();
    let items = [];

    // Collect all elements from stack2 (front of queue)
    const stack2Copy = this._stack2.toArray().reverse();

    // Collect all elements from stack1 (back of queue)
    const stack1Copy = this._stack1.toArray();

    return [...stack2Copy, ...stack1Copy];
  }
}
