/*
  Operations
      1. push 
      2. pop 
      3. top / peek 
      4. size

*/

/*
  Stack implementation using Array

  In other languages, array size are of fixed length
  
  Javascript Array are dynamic in nature
*/

class StackImplementation {
  /**
   * JavaScript arrays are dynamic, but this class mimics a fixed-size stack
   * like you'd find in lower-level languages (e.g., C or Java).
   */
  constructor(size = 10) {
    if (size <= 0 || !Number.isInteger(size)) {
      throw new Error("Size must be a positive integer");
    }

    this._items = new Array(size);
    this._top = -1;
    this._size = size;
  }

  push(element) {
    if (this.isFull()) throw new Error("Stack is full");

    this._items[++this._top] = element;
    return element;
    // this._items.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";

    const popped = this._items[this._top];
    this._items[this._top--] = undefined; // Clear for GC (optional)
    return popped;
    // return this._items.pop();
  }

  peek() {
    if (this.isEmpty()) return "Stack is empty";

    return this._items[this._top];
  }

  isEmpty() {
    return this._top === -1;
    // return this._items.length == 0;
  }

  isFull() {
    return this.length === this._size;
  }

  get length() {
    return this._top + 1;
    // return this._items.length;
  }

  toArray() {
    // return this._items - this might be sufficient
    return this._items.slice(0, this.length);
  }

  toString() {
    return this.toArray().join(", ");
  }
}
