/*
   [{()}]
   last opening is same as the current closing

*/

const isParenthesisBalanced = (str) => {
  let stack = [];
  let openingParenthesis = ["(", "{", "["];
  // console.log(openingParenthesis);

  for (let i = 0; i < str.length; i++) {
    if (openingParenthesis.includes(str[i])) {
      stack.push(str[i]);
    } else {
      let top = stack[stack.length - 1];

      if (
        (str[i] === "}" && top === "{") ||
        (str[i] === ")" && top === "(") ||
        (str[i] === "]" && top === "[")
      ) {
        stack.pop();
      } else return false;
    }
  }

  return stack.length == 0;
};

// preferred

const isParenthesisBalancedV2 = (str) => {
  const stack = [];
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const opening = Object.keys(bracketMap);
  const closing = Object.values(bracketMap);

  for (let ch of str) {
    if (opening.includes(ch)) {
      stack.push(ch);
    } else if (closing.includes(ch)) {
      const last = stack.pop();
      if (bracketMap[last] !== ch) return false;
    }
  }

  return stack.length === 0;
};
