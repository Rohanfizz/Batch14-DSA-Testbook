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

    constructor(arr:number[]) {
        this.head = null;
        this.tail = null;
        this.size = 0;

        for(let i= 0;i<arr.length;i++){
            this.addLast(arr[i])
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

    removeFirst = function() : number{
        if(this.size == 0){
            console.log("Linkedlist is empty! Cannot remove!");
            return -1;
        }
        let val = this.head.val;
        if(this.size == 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
        }
        this.size--;
        return val;
    }

    removeLast = function():number{
        if(this.size == 0){
            console.log("Linkedlist is empty! Cannot remove!");
            return -1;
        }
        let val = this.tail.val;
        if(this.size == 1){
            this.head = null;
            this.tail = null;
        }else{
            let temp = this.head;
            while(temp.next != this.tail){
                temp = temp.next;
            }
            this.tail = temp;
            temp.next = null;
        }
        this.size--;
        return val;
    }
}

let ll = new MyLinkedListClass([10,20,30,40,50,60,70]);

ll.addFirst(20);
ll.addFirst(30);
ll.addLast(40);
ll.display(); // 30->20->10->40
console.log("Removed "+ll.removeFirst()); //30
ll.display(); // 20->10->40
ll.addFirst(100);
ll.display(); // 100->20->10->40
console.log("Removed "+ll.removeLast()); // 40
ll.display(); // 100->20->10
console.log("Removed "+ll.removeLast()); // 10
console.log("Removed "+ll.removeLast()); // 20
console.log("Removed "+ll.removeLast()); // 10
ll.display(); // null
console.log("Removed "+ll.removeFirst()); //30
