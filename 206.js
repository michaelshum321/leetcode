// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let it = head
    let prev = null
    while(it) {
        // if (prev === null) {
        //     prev = it
        //     it = it.next
        //     continue
        // }
        const next = it.next
        it.next = prev
        
        prev = it
        it = next
    }
    return prev
};