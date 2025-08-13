// Brute Force
// Time: O(n) where n is the number of bits in the integer
// Space: O(1) since we only use a few variables
// This approach converts the number to binary, reverses it, and converts back to decimal.
function reverseBits(n) {
    const s = n.toString(2).padStart(32, '0');
    const r = s.split('').reverse().jopin('');
    return parseInt(r,2) >>> 0;
}

// Optimized using bit manipulation
// Time: O(1) since we always process 32 bits
// Space: O(1) since we only use a few variables
function reverseBitsOptimized(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        // Shift result left to make space for the next bit
        result <<= 1;
        // Add the last bit of n to result
        result |= (n & 1);
        // Shift n right to process the next bit
        n >>= 1;
    }
    return result >>> 0; // Ensure we return an unsigned integer
}