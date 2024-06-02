class TreeNode {
    left;
    right;
    val;
    constructor(val) {
        this.left = this.right = null;
        this.val = val;
    }
}

function constructBst(nums: number[], l, r) {
    if (l > r) return null;
    let mid = Math.floor((l + r) / 2);

    let me: TreeNode = new TreeNode(nums[mid]);
    me.left = constructBst(nums, l, mid - 1);
    me.right = constructBst(nums, mid + 1, r);
    return me;
}

let root = constructBst([10, 20, 30, 40, 50, 60, 70], 0, 6);

function bfs(root:TreeNode) : number[]{
    let ans :number[] = [];

    let q : TreeNode[] = [];
    q.push(root);

    while(q.length > 0){
        //Remove
        let curr = q.shift(); //q.pop
        //Work
        ans.push(curr.val);
        //Add children
        if(curr.left != null) q.push(curr.left);
        if(curr.right != null) q.push(curr.right)
    }

    return ans;
}
console.log(bfs(root));
