// 237. Delete Node in a Linked List
// https://leetcode.com/problems/delete-node-in-a-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // put next val into curr, loop until tail. 
    let it = node

    while(it && it.next) {
        it.val = it.next.val
        if (!it.next.next) {
            it.next = null
        }
        it = it.next
    }
};