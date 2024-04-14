//https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
    let history = {};
    for(let i = 0;i<nums.length;i++){
        let partner = target - nums[i];
        
        if(partner in history){
            return [ history[partner],i ];
        }else{
            history[nums[i]] = i;
        }
    }
    return [];
};

let ans = twoSum([2,5,7,15],22)
console.log(ans);
