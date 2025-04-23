/*
 Space Complexity is O(2N)
*/

class MinStack {
  constructor(size = 10000) {
    if (size < 0 || !Number.isInteger(size))
      throw new Error("size must be a valid integer");

    this._items = new Array(size);
    this._top = -1;
    this._size = size;
  }

  push(val) {
    if (this.isFull()) throw new Error("Stack overflow");

    const prevMin = this.isEmpty() ? val : this.getMin();
    const newMin = Math.min(val, prevMin);

    this._items[++this._top] = [val, newMin];
    return val;
  }

  pop() {
    if (this.isEmpty()) throw new Error("Stack is Empty");

    const [popped] = this._items[this._top];
    this._items[this._top--] = undefined;
    return popped;
  }

  top() {
    if (this.isEmpty()) throw new Error("Stack is empty");

    return this._items[this._top][0];
  }

  getMin() {
    if (this.isEmpty()) throw new Error("Stack is empty");

    return this._items[this._top][1];
  }

  isEmpty() {
    return this._top === -1;
  }

  isFull() {
    return this._top + 1 === this._size;
  }

  get length() {
    return this._top + 1;
  }
}

/*
 Space Complexity is O(N)
*/

class MinStackOp {
  constructor(size = 1000) {
    if (size <= 0 || !Number.isInteger(size))
      throw new Error("Size must be a positive integer");
    this._items = new Array(size);
    this._top = -1;
    this._size = size;
    this._curMin = Number.MAX_SAFE_INTEGER;
  }

  push(elm) {
    if (this.isFull()) throw new Error("Stack Overflow");

    let valToInsert = elm;

    if (!this.isEmpty() && valToInsert < this._curMin) {
      valToInsert = 2 * valToInsert - this._curMin;
    }

    this._curMin = Math.min(elm, this._curMin);
    this._items[++this._top] = valToInsert;

    return elm;
  }

  pop(elm) {
    if (this.isEmpty()) throw new Error("Stack is empty");

    let popped = Math.max(this._items[this._top], this._curMin);

    if (this._items[this._top] < this._curMin) {
      this._curMin = 2 * this._curMin - this._items[this._top];
    }

    this._items[this._top--] = undefined;

    return popped;
  }

  getMin() {
    if (this.isEmpty()) throw new Error("Stack is empty");
    return this._curMin;
  }

  top() {
    if (this.isEmpty()) throw new Error("Stack is empty");

    return Math.max(this._curMin, this._items[this._top]);
  }

  isEmpty() {
    return this._top === -1;
  }

  isFull() {
    return this._top + 1 === this._size;
  }

  get length() {
    return this._top + 1;
  }
}

/*
  Refactored Code
  prefer this
*/

class MinStackOpV2 {
  constructor(size = 1000) {
    if (size <= 0 || !Number.isInteger(size)) {
      throw new Error("Size must be a positive integer");
    }

    this._items = new Array(size);
    this._top = -1;
    this._size = size;
    this._curMin = null;
  }

  push(elm) {
    if (this.isFull()) throw new Error("Stack Overflow");

    if (this.isEmpty()) {
      this._curMin = elm;
      this._items[++this._top] = elm;
    } else {
      if (elm < this._curMin) {
        const encoded = 2 * elm - this._curMin;
        this._items[++this._top] = encoded;
        this._curMin = elm;
      } else {
        this._items[++this._top] = elm;
      }
    }

    return elm;
  }

  pop() {
    if (this.isEmpty()) throw new Error("Stack is empty");

    const topVal = this._items[this._top--];
    let actualVal;

    if (topVal < this._curMin) {
      actualVal = this._curMin;
      this._curMin = 2 * this._curMin - topVal;
    } else {
      actualVal = topVal;
    }

    return actualVal;
  }

  top() {
    if (this.isEmpty()) throw new Error("Stack is empty");

    const topVal = this._items[this._top];
    return topVal < this._curMin ? this._curMin : topVal;
  }

  getMin() {
    if (this.isEmpty()) throw new Error("Stack is empty");
    return this._curMin;
  }

  isEmpty() {
    return this._top === -1;
  }

  isFull() {
    return this._top + 1 === this._size;
  }

  get length() {
    return this._top + 1;
  }
}
