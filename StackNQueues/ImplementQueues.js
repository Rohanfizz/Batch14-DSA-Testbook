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
        this.getNodeAt = function (targetIdx) {
            if (targetIdx < 0 || targetIdx >= this.size) {
                return null;
            }
            var temp = this.head;
            var idx = 0;
            while (idx < targetIdx) {
                idx++;
                temp = temp.next;
            }
            return temp;
        };
        this.addAt = function (targetIdx, val) {
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
            var nn = new ListNode(val);
            var temp = this.getNodeAt(targetIdx - 1);
            nn.next = temp.next;
            temp.next = nn;
            this.size++;
        };
        this.removeAt = function (targetIdx) {
            if (targetIdx < 0 || targetIdx >= this.size) {
                console.log("Invalid Index!");
                return -1;
            }
            if (targetIdx == 0) {
                return this.removeFirst();
            }
            if (targetIdx == this.size - 1) {
                return this.removeLast();
            }
            var temp = this.getNodeAt(targetIdx - 1);
            var val = temp.next.val;
            temp.next = temp.next.next;
            this.size--;
            return val;
        };
        this.head = null;
        this.tail = null;
        this.size = arr.length;
        for (var i = 0; i < arr.length; i++) {
            this.addLast(arr[i]);
        }
    }
    return MyLinkedListClass;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.push = function (val) {
            this.ll.addLast(val);
        };
        this.pop = function () {
            return this.ll.removeFirst();
        };
        this.front = function () {
            return this.ll.getNodeAt(0).val;
        };
        this.size = function () {
            return this.ll.getSize();
        };
        this.ll = new MyLinkedListClass([]);
    }
    return Queue;
}());
var q = new Queue();
q.push(10);
q.push(20);
q.push(30);
q.push(40);
q.push(50);
console.log(q.pop()); //10
console.log(q.front()); //20
console.log(q.pop()); //20
console.log(q.pop()); //30
console.log(q.pop()); //40
