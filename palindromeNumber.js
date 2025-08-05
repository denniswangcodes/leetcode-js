// Check if a number is a palindrome using string conversion
function isPalindromeString(x) {
  // Time Complexity: O(n) — where n is the number of digits
  // Space Complexity: O(n) — for storing string and reversed string

  // Negative numbers are not palindromes
  if (x < 0) return false;

  // Convert number to string
  const str = x.toString();

  // Reverse the string
  const reversed = str.split('').reverse().join('');

  // Compare original and reversed strings
  return str === reversed;
}

// 🔍 Test Cases for String-Based Version
console.log(isPalindromeString(121));   // Expected: true
console.log(isPalindromeString(-121));  // Expected: false
console.log(isPalindromeString(10));    // Expected: false

// Check if a number is a palindrome using pure math (no string conversion)
function isPalindromeMath(x) {
  // Time Complexity: O(log n) — only half the digits are processed
  // Space Complexity: O(1) — constant space

  // Negative numbers are not palindromes
  if (x < 0) return false;

  // Zero is a palindrome
  if (x === 0) return true;

  // Store the original number to compare later
  let original = x;

  // Initialize reversed number
  let reversed = 0;

  // Reverse the number digit by digit
  while (x > 0) {
    // Extract last digit
    const digit = x % 10;

    // Append digit to reversed number
    reversed = reversed * 10 + digit;

    // Remove last digit from x
    x = Math.floor(x / 10);
  }

  // Compare reversed number with original
  return original === reversed;
}

// 🔍 Test Cases for Math-Based Version
console.log(isPalindromeMath(121));   // Expected: true
console.log(isPalindromeMath(-121));  // Expected: false
console.log(isPalindromeMath(10));    // Expected: false