// Blueprint
var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var arr = [5, 2, 6, -1, -1, 3, 4, -1, -1, -1, 7, 9, -1, -1, 8, -1, -1];
var idx = 0;
function constructBinaryTree() {
    if (arr[idx] == -1) {
        idx++;
        return null;
    }
    // Node
    var me = new TreeNode(arr[idx]);
    idx++;
    // left
    me.left = constructBinaryTree();
    // right
    me.right = constructBinaryTree();
    return me;
}
var root = constructBinaryTree();
var preorder = [];
var inorder = [];
var postorder = [];
function dfs(node) {
    if (node == null)
        return;
    preorder.push(node.val);
    // left
    dfs(node.left);
    inorder.push(node.val);
    // right
    dfs(node.right);
    postorder.push(node.val);
}
dfs(root);
console.log(preorder);
console.log(inorder);
console.log(postorder);
