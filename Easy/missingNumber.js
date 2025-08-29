var missingNumber = function(nums) {
    let n = nums.length;
    let expected = n * (n + 1) / 2;
    let actual = nums.reduce((a, b) => a + b, 0);
    return expected - actual;
};