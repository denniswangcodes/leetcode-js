function climbStairs(n) {
  if (n <= 2) return n;

  let last = 2;        // ways to reach step (i - 1)
  let secondLast = 1;  // ways to reach step (i - 2)

  for (let i = 3; i <= n; i++) {
    const current = last + secondLast;
    secondLast = last;
    last = current;
  }

  return last;
}

// Time: O(n) since we compute each step once
// Space: O(1) since we only use a few variables for tracking
// dynamic programming: top-down approach or bottom-up approach
// This is a bottom-up approach where we build the solution iteratively.