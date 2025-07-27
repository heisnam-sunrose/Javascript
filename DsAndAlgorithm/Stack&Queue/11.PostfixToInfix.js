class PostfixToInfix {
  constructor() {
    this._stack = new StackImplementation();
  }

  convert(expr) {
    // remove empty spaces
    let str = expr.replace(/\s+/g, "");

    for (const char of str) {
      if (this.isOperand(char)) this._stack.push(char);
      else {
        const newExp = `( ${this._stack.pop()} ${char} ${this._stack.pop()} )`;
        this._stack.push(newExp);
      }
    }
    return this._stack.pop();
  }

  isOperand(char) {
    return /^[a-zA-Z0-9]$/.test(char);
  }
}
