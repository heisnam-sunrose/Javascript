/*
  TC => O(N) + O(N)
  SC => O(N)

  In infix notation, operators are written between operands:
   A + B
   In postfix notation, also known as Reverse Polish Notation (RPN), the operator comes after the operands:
   A B +
*/

class InfixToPostfix {
  constructor(str) {
    this.stack = new StackImplementation();
    this.postFixEx = "";
  }
  convert(str) {
    for (const char of str) {
      if (isOperand(char)) this.postFixEx += char;
      else if (isOpeningBracket(char)) this.stack.push(char);
      else if (isClosingBracket(char)) {
        while (
          !this.stack.isEmpty() &&
          !this.isOpeningBracket(this.stack.top())
        ) {
          this.postFixEx += this.stack.pop();
        }
        // discard the opening bracket
        this.stack.pop();
      } else {
        // char is operator
        while (
          !this.stack.isEmpty() &&
          /* 
              this.getPriority(char) <= this.getPriority(this.stack.top())
              This works for left-associative operators. 
              But for right-associative ones (like ^), 
              we must not pop if the current operator has the same precedence.
            */
          (this.getPriority(char) < this.getPriority(this.stack.top()) ||
            (this.getPriority(char) === this.getPriority(this.stack.top()) &&
              !this.isRightAssociative(char)))
        ) {
          this.postFixEx += this.stack.pop();
        }
        this.stack.push(char);
      }
    }

    // move all operators to the postFixEx
    while (!this.stack.isEmpty()) {
      this.postFixEx += this.stack.pop();
    }

    return this.postFixEx;
  }

  isOperand(char) {
    // return (
    //   (char >= "A" && char <= "Z") ||
    //   (char >= "a" && char <= "z") ||
    //   (char >= 0 && char <= 9)
    // );

    return /^[a-zA-Z0-9]$/.test(char);
  }

  isOpeningBracket(char) {
    return char === "(";
  }

  isClosingBracket(char) {
    return char === ")";
  }

  isRightAssociative(op) {
    return op === "^";
  }

  getPriority(operator) {
    const priorities = {
      "^": 3,
      "*": 2,
      "/": 2,
      "+": 1,
      "-": 1,
    };
    // ?? (nullish coalescing) – safely returns -1 if the operator isn’t found.
    return priorities[operator] ?? -1;
  }
}
