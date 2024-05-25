// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
class Solution {

    public TreeNode constructBst(int[] nums,int l,int r){
        if(l > r) return null;
        int mid = (l+r)/2;

        TreeNode me = new TreeNode(nums[mid]);
        me.left = constructBst(nums,l,mid-1);
        me.right = constructBst(nums,mid+1,r);

        return me;
    }

    public TreeNode sortedArrayToBST(int[] nums) {
        return constructBst(nums,0,nums.length-1);
    }
}
