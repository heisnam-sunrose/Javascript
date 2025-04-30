/*
  1. Reverse the given Infix
  2. Infix to Postfix under controlled condition 
  3. Reverse the answer 
*/

class InfixToPrefix {
  constructor() {
    this._stack = new StackImplementation(); // Using simple array as stack
  }

  convert(expression) {
    if (!expression || typeof expression !== "string") {
      throw new Error("Invalid input expression");
    }

    // 1. Reverse and modify brackets
    let str = this.reverseAndModifyBrackets(expression);
    let answer = "";

    // 2. Process as postfix
    for (const char of str) {
      if (this.isOperand(char)) answer += char;
      else if (this.isOpeningBracket(char)) this._stack.push(char);
      else if (this.isClosingBracket(char)) {
        /*
          closing bracket encountered,
          pop out everything till the opening bracket
       */
        while (
          !this._stack.isEmpty() &&
          !this.isOpeningBracket(this._stack.peek())
        ) {
          answer += this._stack.pop();
        }
        // remove the opening bracket
        this._stack.pop();
      } else {
        // operator encountered
        while (
          !this._stack.isEmpty() &&
          (this.getPriority(char) < this.getPriority(this._stack.peek()) ||
            (this.getPriority(char) === this.getPriority(this._stack.peek()) &&
              !this.isRightAssociative(char)))
        ) {
          answer += this._stack.pop();
        }
        this._stack.push(char);
      }
    }

    // 3. Reverse to get prefix
    while (!this._stack.isEmpty()) answer += this._stack.pop();

    // 3. reverse the answer
    return answer.split("").reverse().join("");
  }

  reverseAndModifyBrackets(str) {
    // remove empty spaces
    str = str.replace(/\s+/g, "");
    return str
      .split("")
      .reverse()
      .map((char) => {
        if (char === "(") return ")";
        if (char === ")") return "(";
        return char;
      })
      .join("");
  }

  isOperand(char) {
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

  getPriority(char) {
    const priorities = {
      "^": 3,
      "*": 2,
      "/": 2,
      "+": 1,
      "-": 1,
    };
    // ?? (nullish coalescing) – safely returns -1 if the operator isn’t found.
    return priorities[char] ?? -1;
  }
}

const converter = new InfixToPrefix();
console.log(converter.solution("a+b*(c^d-e)^(f+g*h)-i"));
