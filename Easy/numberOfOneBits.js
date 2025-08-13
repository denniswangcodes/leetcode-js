// Brute force solution to count the number of '1' bits in the binary representation of a number
// Time: O(n) where n is the number of bits in the integer 
// Space: O(1) since we only use a few variables
function hammingWeightBrute(n) {
    return n.toString(2).split('').filter(bit => bit === '1').length;
}

// Optimized solution using bit manipulation
// Time: O(1) since we always process 32 bits
// Space: O(1) since we only use a few variables
function hammingWeightOptimized(n) {
    let count = 0;
    while (n) {
        // Increment count for each '1' bit
        count += n & 1;
        // Right shift n to process the next bit
        n >>= 1;
    }
    return count;
}