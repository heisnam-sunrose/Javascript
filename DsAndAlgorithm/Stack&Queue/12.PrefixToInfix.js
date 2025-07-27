class PrefixToInfix {
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

    for (let i = str.length - 1; i >= 0; i--) {
      if (this.isOperand(str[i])) this._stack.push(char);
      else {
        const operand2 = this._stack.pop();
        const operand1 = this._stack.pop();
        const newExp = `(${operand1} ${str[i]} ${operand2})`;
        this._stack.push(newExp);
      }
    }
    return this._stack.pop();
  }

  isOperand(char) {
    return /^[a-zA-Z0-9]$/.test(char);
  }
}
