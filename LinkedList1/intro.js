var ListNode = /** @class */ (function () {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    return ListNode;
}());
var MyLinkedListClass = /** @class */ (function () {
    function MyLinkedListClass(arr) {
        this.getSize = function () {
            return this.size;
        };
        this.addFirst = function (val) {
            var nn = new ListNode(val);
            if (this.size == 0) {
                this.head = nn;
                this.tail = nn;
            }
            else {
                nn.next = this.head;
                this.head = nn;
            }
            this.size++;
        };
        this.addLast = function (val) {
            var nn = new ListNode(val);
            if (this.size == 0) {
                this.head = nn;
                this.tail = nn;
            }
            else {
                this.tail.next = nn;
                this.tail = nn;
            }
            this.size++;
        };
        this.display = function () {
            var temp = this.head;
            var ans = "";
            while (temp != null) {
                ans += temp.val + " -> ";
                temp = temp.next;
            }
            ans += "null";
            console.log(ans);
        };
        this.removeFirst = function () {
            if (this.size == 0) {
                console.log("Linkedlist is empty! Cannot remove!");
                return -1;
            }
            var val = this.head.val;
            if (this.size == 1) {
                this.head = null;
                this.tail = null;
            }
            else {
                this.head = this.head.next;
            }
            this.size--;
            return val;
        };
        this.removeLast = function () {
            if (this.size == 0) {
                console.log("Linkedlist is empty! Cannot remove!");
                return -1;
            }
            var val = this.tail.val;
            if (this.size == 1) {
                this.head = null;
                this.tail = null;
            }
            else {
                var temp = this.head;
                while (temp.next != this.tail) {
                    temp = temp.next;
                }
                this.tail = temp;
                temp.next = null;
            }
            this.size--;
            return val;
        };
        this.head = null;
        this.tail = null;
        this.size = 0;
        for (var i = 0; i < arr.length; i++) {
            this.addLast(arr[i]);
        }
    }
    return MyLinkedListClass;
}());
var ll = new MyLinkedListClass([10, 20, 30, 40, 50, 60, 70]);
ll.addFirst(10);
ll.display();
// ll.addFirst(20);
// ll.addFirst(30);
// ll.addLast(40);
// ll.display(); // 30->20->10->40
// console.log("Removed "+ll.removeFirst()); //30
// ll.display(); // 20->10->40
// ll.addFirst(100);
// ll.display(); // 100->20->10->40
// console.log("Removed "+ll.removeLast()); // 40
// ll.display(); // 100->20->10
// console.log("Removed "+ll.removeLast()); // 10
// console.log("Removed "+ll.removeLast()); // 20
// console.log("Removed "+ll.removeLast()); // 10
// ll.display(); // null
// console.log("Removed "+ll.removeFirst()); //30
