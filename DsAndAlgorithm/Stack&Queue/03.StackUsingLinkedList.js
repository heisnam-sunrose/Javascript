class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class StackImplementation {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(elm) {
    this.top = new Node(elm, this.top);
    this.size += 1;
    return this.top.data;
  }

  peek() {
    if (this.isEmpty()) throw new Error("Stack is empty");

    return this.top.data;
  }

  pop() {
    if (this.isEmpty()) throw new Error("Stack is empty");
    
    let data = this.top.data;
    this.top = this.top.next;
    return data;
  }

  isEmpty() {
    return this.size == 0;
  }

  // getter
  get length() {
    return this.size;
  }
  toArray() {
    let result = [];
    let temp = this.top;
    while (temp) {
      result.push(temp.data);
      temp = temp.next;
    }
    return result;
  }
}
