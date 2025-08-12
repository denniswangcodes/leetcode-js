// Binary tree node:
// function TreeNode(val, left, right) {
//   this.val = (val===undefined ? 0 : val);
//   this.left = (left===undefined ? null : left);
//   this.right = (right===undefined ? null : right);
// }

function maxDepthBFS(root) {
  if (!root) return 0;                 // If tree is empty, depth is 0
  const queue = [root];                // Queue for breadth-first traversal starting at root
  let depth = 0;                       // Tracks how many levels we've completed

  while (queue.length) {               // While there are nodes at the current level
    let levelSize = queue.length;      // Number of nodes in this level
    while (levelSize--) {              // Process all nodes in this level
      const node = queue.shift();      // Dequeue one node
      if (node.left) queue.push(node.left);   // Enqueue left child for next level
      if (node.right) queue.push(node.right); // Enqueue right child for next level
    }
    depth++;                           // Finished one full level
  }

  return depth;                        // Total levels processed equals maximum depth
}
//Time: O(n) because each node is enqueued and dequeued once.
//Space: O(w) where w is the maximum width of the tree (worst case O(n)) due to the queue.

function maxDepthDFS(root) {
  if (!root) return 0;                        // Empty subtree contributes 0 depth
  const leftDepth = maxDepthDFS(root.left);   // Recursively get depth of left subtree
  const rightDepth = maxDepthDFS(root.right); // Recursively get depth of right subtree
  return 1 + Math.max(leftDepth, rightDepth); // Current node adds 1 over the deeper subtree
}
//Time: O(n) because each node is visited exactly once.
//Space: O(h) for the recursion call stack where h is tree height (worst case O(n), balanced O(log n)).