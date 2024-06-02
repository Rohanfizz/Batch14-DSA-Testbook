var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.left = this.right = null;
        this.val = val;
    }
    return TreeNode;
}());
function constructBst(nums, l, r) {
    if (l > r)
        return null;
    var mid = Math.floor((l + r) / 2);
    var me = new TreeNode(nums[mid]);
    me.left = constructBst(nums, l, mid - 1);
    me.right = constructBst(nums, mid + 1, r);
    return me;
}
var root = constructBst([10, 20, 30, 40, 50, 60, 70], 0, 6);
function bfs(root) {
    var ans = [];
    var q = [];
    q.push(root);
    while (q.length > 0) {
        //Remove
        var curr = q.shift(); //q.pop
        //Work
        ans.push(curr.val);
        //Add children
        if (curr.left != null)
            q.push(curr.left);
        if (curr.right != null)
            q.push(curr.right);
    }
    return ans;
}
console.log(bfs(root));
