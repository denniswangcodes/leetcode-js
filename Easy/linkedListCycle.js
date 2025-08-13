// Brute Force
// Time: O(n) where n is the number of nodes in the list
// Space: O(n) for the set to track visited nodes
function hasCycleBrute(head) {
    const visited = new Set();

    let current = head;
    while (current){
        if (visited.has(current)) {
            return true;
        }

        visited.add(current);
        current = current.next;
    }
    return false;
}

// Optimized using Floyd's Tortoise and Hare algorithm
// Time: O(n) where n is the number of nodes in the list
// Space: O(1) since we use two pointers
function hasCycleOpt(head) {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {

        if (!fast || !fast.next) return faslse;

        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
}