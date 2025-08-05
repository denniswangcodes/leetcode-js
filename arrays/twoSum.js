function twoSum(nums, target) {
  const map = {}; // Stores number -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }
    
    map[nums[i]] = i;
  }

  return []; // No solution found
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));    // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6));         // Expected: [1, 2]
console.log(twoSum([3, 3], 6));            // Expected: [0, 1]