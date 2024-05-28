class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedListClass {
    private head: ListNode | null;
    private tail: ListNode | null;
    private size: number;

    constructor(arr: number[]) {
        this.head = null;
        this.tail = null;
        this.size = 0;

        for (let i = 0; i < arr.length; i++) {
            this.addLast(arr[i]);
        }
    }

    getSize = function (): number {
        return this.size;
    };

    addFirst = function (val: number): void {
        let nn = new ListNode(val);
        if (this.size == 0) {
            this.head = nn;
            this.tail = nn;
        } else {
            nn.next = this.head;
            this.head = nn;
        }
        this.size++;
    };

    addLast = function (val: number): void {
        let nn = new ListNode(val);
        if (this.size == 0) {
            this.head = nn;
            this.tail = nn;
        } else {
            this.tail.next = nn;
            this.tail = nn;
        }
        this.size++;
    };

    display = function () {
        let temp = this.head;
        let ans = "";
        while (temp != null) {
            ans += temp.val + " -> ";
            temp = temp.next;
        }
        ans += "null";
        console.log(ans);
    };

    removeFirst = function (): number {
        if (this.size == 0) {
            console.log("Linkedlist is empty! Cannot remove!");
            return -1;
        }
        let val = this.head.val;
        if (this.size == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.size--;
        return val;
    };

    removeLast = function (): number {
        if (this.size == 0) {
            console.log("Linkedlist is empty! Cannot remove!");
            return -1;
        }
        let val = this.tail.val;
        if (this.size == 1) {
            this.head = null;
            this.tail = null;
        } else {
            let temp = this.head;
            while (temp.next != this.tail) {
                temp = temp.next;
            }
            this.tail = temp;
            temp.next = null;
        }
        this.size--;
        return val;
    };

    getNodeAt = function (targetIdx: number): ListNode | null {
        if (targetIdx < 0 || targetIdx >= this.size) {
            return null;
        }
        let temp = this.head;
        let idx = 0;
        while (idx < targetIdx) {
            idx++;
            temp = temp.next;
        }
        return temp;
    };

    addAt = function (targetIdx: number, val: number) {
        if (targetIdx < 0 || targetIdx > this.size) {
            console.log("Invalid index!");
            return;
        }
        if (targetIdx == 0) {
            this.addFirst(val);
            return;
        }
        if (targetIdx == this.size) {
            this.addLast(val);
            return;
        }
        //in between first and last
        let nn = new ListNode(val);
        let temp = this.getNodeAt(targetIdx - 1);
        nn.next = temp.next;
        temp.next = nn;
        this.size++;
    };

    removeAt = function (targetIdx:number) : number{
        if(targetIdx < 0 || targetIdx >= this.size){
            console.log("Invalid Index!");
            return -1;
        }
        if(targetIdx == 0){
            return this.removeFirst();
        }
        if(targetIdx == this.size-1){
            return this.removeLast();
        }
        let temp = this.getNodeAt(targetIdx-1);
        let val = temp.next.val;
        temp.next = temp.next.next;
        this.size--;
        return val;
    }
}

let ll = new MyLinkedListClass([10, 20, 30, 40, 50, 60, 70]);
ll.addAt(1,100);
console.log("removed node with value:",ll.removeAt(5));
//10,100,20,30,40,60,70
ll.display()