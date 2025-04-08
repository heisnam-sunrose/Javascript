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
  /*
     Javascript Array are dynamic in nature,
     fixing the length of the array does not makes sense
     It is to mimic, how array implemented stack would behave in other language  
  */
  constructor(size = 10) {
    this.items = [];
    this.top = -1;
    this.size = size;
  }

  push(element) {
    if (this.top + 1 > this.size - 1) throw new Error("Stack is full");

    this.top += 1;
    this.items[this.top] = element;
    // this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";

    this.top -= 1;
    // return this.items.pop();
  }

  top() {
    if (this.isEmpty()) return "Stack is empty";

    return this.items[top];
  }

  length() {
    return this.top + 1;
    // return this.items.length;
  }

  isEmpty() {
    return this.top == -1;
    // return this.items.length == 0;
  }

  print() {
    console.log(this.items.toString());
  }
}


const stack = new StackImplementation(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
// stack.push(6);
console.log(stack.length());
console.log(stack.isEmpty());
stack.print();
