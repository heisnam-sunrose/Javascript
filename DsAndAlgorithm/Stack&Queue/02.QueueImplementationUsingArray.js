/*
  Queue implementation using Array
*/

class QueueImplementation {
  constructor(size) {
    this.items = [];
    this.start = -1;
    this.end = -1;
    this.curSize = 0;
    this.size = size;
  }

  /*
    Enqueue (add) an element to the queue
    push
  */
  enqueue(element) {
    if (this.curSize == this.size) throw new Error("Queue is full");

    if (this.isEmpty()) {
      this.start = 0;
      this.end = 0;
    } else this.end = (this.end + 1) % this.size;

    this.items[this.end] = element;
    this.curSize += 1;
    // this.items.push(element);
  }

  // Dequeue (remove) an element from the queue
  dequeue() {
    if (this.isEmpty()) return console.log("Queue is empty");

    let el = this.items[this.start];

    if (this.length() === 1) {
      this.start = -1;
      this.end = -1;
    } else this.start = (this.start + 1) % this.size;

    this.curSize -= 1;
    return el;
    // return this.items.shift();
  }

  peek() {
    return this.isEmpty()
      ? "Queue is empty"
      : console.log(this.items[this.start]);
  }

  isEmpty() {
    return this.curSize == 0;
    // return this.start == -1;
    // return this.items.length === 0;
  }

  length() {
    return this.curSize;
    // return this.end + 1;
    // return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new QueueImplementation(3);
queue.enqueue(2);
queue.peek();
queue.enqueue(3);
queue.enqueue(5);
// queue.enqueue(5);
queue.peek();
queue.print();
queue.dequeue();
queue.peek();
queue.dequeue();
queue.peek();
queue.dequeue();
queue.dequeue();
