/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
// https://leetcode.com/problems/reorder-list/description/
 
 function middleNode(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
};

function reverseList(head: ListNode | null): ListNode | null {
    if(head == null) return null;
    if(head.next == null) return head;

    let prev = null;
    let curr = head;
    let next = head.next;    

    while(curr != null){
        curr.next = prev;
        prev = curr;
        curr = next;
        if(next != null){
            next = next.next;
        }
    }
    head = prev;
    return head;
};

function reorderList(h1: ListNode | null): void {
    let mid = middleNode(h1);
    let h2 = mid.next;
    mid.next = null;
    h2 = reverseList(h2)
    // Merge LinkedLists
    let t1 = h1;
    let t2 = h2;
    let dummy = new ListNode(-1);
    let curr = dummy;

    while(t1 != null && t2 != null){
        curr.next = t1;
        t1 = t1.next;
        curr = curr.next;

        curr.next = t2;
        t2 = t2.next;
        curr = curr.next;
    }
    if(t1 == null) curr.next = t2;
    else curr.next = t1;

    return dummy.next;
};






