/**
 * Definition for singly-linked list:
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */

function mergeTwoListsBruteForce(list1, list2) {
  // Step 1: dump all node values into an array
  let vals = [];
  
  let cur = list1;
  while (cur !== null) {
    vals.push(cur.val);
    cur = cur.next;
  }
  
  cur = list2;
  while (cur !== null) {
    vals.push(cur.val);
    cur = cur.next;
  }
  
  // Step 2: sort the array
  vals.sort((a, b) => a - b);
  
  // Step 3: rebuild linked list from sorted values
  let dummy = new ListNode(0);
  let tail = dummy;
  
  for (let v of vals) {
    tail.next = new ListNode(v);
    tail = tail.next;
  }
  
  return dummy.next;
}
//Time: O((m + n) log(m + n)) due to sorting all values
//Space: O(m + n) extra array and new list nodes


function mergeTwoLists(list1, list2) {

    let dummy = new ListNode();
    let temp = dummy;
    
    while (list1 && list2) {
        if (list1.val < list2.val) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }
    
    if (list1) temp.next = list1;
    if (list2) temp.next = list2;
    
    return dummy.next;
}
//Time: O(m + n) single pass through both lists
//Space: O(1) only uses a few pointers and merges in place

let list1a = arrayToList([1, 2, 4]);
let list2a = arrayToList([1, 3, 4]);
let merged1 = mergeTwoLists(list1a, list2a);
console.log(listToArray(merged1)); // Expected: [1, 1, 2, 3, 4, 4]