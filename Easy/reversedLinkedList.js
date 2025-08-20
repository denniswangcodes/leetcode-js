// Brute Force
// Time Complexity: O(n)
// Space Complexity: O(1)
function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
}