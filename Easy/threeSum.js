var threeSum = function(nums) {
  nums.sort((a, b) => a - b);         // 1) sort ascending
  const n = nums.length;
  const res = [];

  for (let i = 0; i < n - 2; i++) {
    // Skip duplicate anchors to avoid duplicate triplets like [-1,-1,2] twice
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Optional pruning: if the smallest possible sum > 0, break early
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break;
    // Optional pruning: if the largest possible sum < 0, continue to next i
    if (nums[i] + nums[n - 2] + nums[n - 1] < 0) continue;

    let l = i + 1;
    let r = n - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);

        // Move l and r past duplicates to avoid repeating the same triplet
        const lv = nums[l], rv = nums[r];
        while (l < r && nums[l] === lv) l++;
        while (l < r && nums[r] === rv) r--;
      } else if (sum < 0) {
        l++; // need a bigger sum → move left pointer right
      } else {
        r--; // need a smaller sum → move right pointer left
      }
    }
  }
  return res;
};