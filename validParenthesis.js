// brute force
function isValidParenthesis(s) {
  let prev = '';

  // WHILE the string keeps changing after replacements
  while (s !== prev) {
    prev = s;

    // REPLACE all matched pairs of brackets
    // Remove "()", "{}", and "[]" from the string
    s = s.replace("()", "").replace("{}", "").replace("[]", "");
  }

  // IF final string is empty, it was valid
  return s.length === 0;
}

// optimized
function isValid(s) {
    const stack = [];

    // MAP closing brackets to their matching opening brackets
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // FOR each character in the string
    for (const char of s) {
        // IF it's an opening bracket, push to stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            // ELSE it's a closing bracket
            // POP the last item from the stack and compare
            const last = stack.pop();

            // IF no match or stack was empty → invalid
            if (last !== map[char]) {
                return false;
            }
        }
    }

    // IF stack is empty after full scan, it was valid
    return stack.length === 0;
}

// Test cases
console.log(isValidParenthesis("()")); // Expected: true    
console.log(isValidParenthesis("()[]{}")); // Expected: true
console.log(isValidParenthesis("(]")); // Expected: false
console.log(isValidParenthesis("([)]")); // Expected: false
console.log(isValidParenthesis("{[]}")); // Expected: true
console.log(isValidParenthesis("")); // Expected: true
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false
console.log(isValid("([)]")); // Expected: false
console.log(isValid("{[]}")); // Expected: true
console.log(isValid("")); // Expected: true