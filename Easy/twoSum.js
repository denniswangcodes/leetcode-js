// Iterate over each index i in the array
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function twoSumBruteForce(nums, target) {

  // Outer loop to pick the first number
  for (let i = 0; i < nums.length; i++) {
    // Inner loop to pick the second number after i
    for (let j = i + 1; j < nums.length; j++) {
      // Check if the sum of both numbers equals the target
      if (nums[i] + nums[j] === target) {
        // If yes, return their indices
        return [i, j];
      }
    }
  }

  // If no valid pair is found, return empty array
  return [];
}

// Use a hash map to track seen numbers and their indices
// // Time Complexity: O(n)
// Space Complexity: O(n)
function twoSum(nums, target) {

  // Initialize empty hash map to store number -> index
  const map = {};

  // Iterate through each number in the array
  for (let i = 0; i < nums.length; i++) {
    // Compute the value needed to reach the target
    const complement = target - nums[i];

    // Check if the needed value has already been seen
    if (map.hasOwnProperty(complement)) {
      // If yes, return the stored index and current index
      return [map[complement], i];
    }

    // Otherwise, store the current number with its index
    map[nums[i]] = i;
  }

  // If no solution found, return empty array
  return [];
}

console.log(twoSumBruteForce([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSumBruteForce([3, 2, 4], 6));      // Expected: [1, 2]
console.log(twoSumBruteForce([3, 3], 6));         // Expected: [0, 1]
console.log(twoSum([2, 7, 11, 15], 9));           // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6));                // Expected: [1, 2]
console.log(twoSum([3, 3], 6));                   // Expected: [0, 1]