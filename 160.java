// 160. Intersection of Two Linked Lists
// https://leetcode.com/problems/intersection-of-two-linked-lists/
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        HashSet<ListNode> set = new HashSet();
        ListNode iter1 = headA;
        while(iter1 != null) {
            set.add(iter1);
            iter1 = iter1.next;
        }
        ListNode iter2 = headB;
        while(iter2 != null) {
            if (set.contains(iter2)) {
                return iter2;
            }
            iter2 = iter2.next;
        }
        return null;
    }
}