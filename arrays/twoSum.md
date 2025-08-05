## Problem: [Two Sum](https://leetcode.com/problems/title/)

### Difficulty: Easy
### Topic: Arrays

### ✅ Problem Summary
Summarize what the problem is asking in your own words.
How to turn an array into an ouput of a pair of numbers that satisfy the complementary condition.

### 🚩 Constraints & Edge Cases
- Describe special cases (e.g., negative numbers, empty inputs)

### 💡 Intuition
What's the key insight?
2 pass 2 for loops scan full array while 1 pass 1 for loop builds map from what's seen so far as it waits for its complements of seen numbers.

### 🔍 Approach
- Strategy breakdown (brute force vs optimized)
- Time & Space Complexity
Turning from 2 pass (2 for loop) to 1 pass (gradual buildup of 1 for loop) saved some resoruces in time and space.