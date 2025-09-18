function countBits(n) {
  const ans = new Array(n + 1).fill(0);        // 1) Prepare result array of length n+1, initialized to 0s
  for (let i = 1; i <= n; i++) {               // 2) Fill counts for 1..n (ans[0] already correct)
    ans[i] = ans[i & (i - 1)] + 1;             // 3) Remove lowest set bit, reuse its count, then +1
  }
  return ans;                                   // 4) Return the array
}