function isSameTree(p, q) {
  // Base case: both empty → same
  if (!p && !q) return true;
  // Base case: one empty or values differ → not same
  if (!p || !q || p.val !== q.val) return false;

  // Recursively compare left subtrees and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Time: O(n) where n is the number of nodes in the trees
// Space: O(h) for the recursion stack where h is the height of the trees