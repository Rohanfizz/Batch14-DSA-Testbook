// Blueprint
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let arr = [50, 20, 10, -1, -1, 40, -1, -1, 30, 11, -1, -1, -1];
let idx = 0;

function constructBinaryTree() : TreeNode | null{
    if(arr[idx] == -1){
        idx++;
        return null;
    }
    // Node
    let me = new TreeNode(arr[idx])
    idx++;
    // left
    me.left = constructBinaryTree();
    // right
    me.right = constructBinaryTree();
    return me;
}

function displayTree(node:TreeNode | null){
    if(node == null) return;

    let s = "";
    s += node.val+": "+node.left?.val+", "+node.right?.val
    console.log(s)

    displayTree(node.left)
    displayTree(node.right)
}

let root = constructBinaryTree();
displayTree(root)
