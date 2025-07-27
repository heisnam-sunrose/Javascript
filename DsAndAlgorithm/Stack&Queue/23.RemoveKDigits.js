const removeKDigits = (nums, k) => {
  let n = nums.length;
  if (k >= n) return "0";

  let stack = new Array(n - k); // allocate max size
  let top = -1;
  for (let digit of nums) {
    /*
      top >= 0 -> not empty

    */
    while (k > 0 && top >= 0 && stack[top] > digit) {
      top--;
      k--;
    }

    stack[++top] = digit;
  }

  // If there are still digits to remove, cut from the end
  top -= k;

  const result = stack
    .slice(0, top + 1)
    .join("")
    .replace(/^0+/, "");

  return result === "" ? "0" : result;
};

/*
➤ stack[top] > digit:
Stack: []

Read '1' → push: ['1']

Read '1' → 1 > 1 is false → don’t pop

Push: ['1', '1']

Read '2' → 1 > 2 false → don’t pop

Push: ['1', '1', '2']

Still k=1, so we remove from the end → final: '11'

Correct answer: '11' ✅

➤ If we use stack[top] >= digit:
'1' vs '1' → 1 >= 1 is true → pop!

Only one '1' stays

Final: '12' ❌

This is wrong — '12' is bigger than '11'
*/
