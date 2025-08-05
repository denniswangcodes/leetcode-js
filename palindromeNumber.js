// stringify input number solution
var isPalindrome = function (x) {
    if (x < 0) return false;
   
    const str = x.toString();
    const reversed = str.split('').reverse().join('');

    return str === reversed;
}

console.log(isPalindrome(121)); // Expected: true
console.log(isPalindrome(-121)); // Expected: false
console.log(isPalindrome(10)); // Expected: false

// solution without stringifying input number
var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x === 0) return true;

    let reversed = 0;
    let original = x;

    while (x > 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    return original === reversed;
}