function twoSum(nums, target) {
    var history = {};
    for (var i = 0; i < nums.length; i++) {
        var partner = target - nums[i];
        if (partner in history) {
            return [history[partner], i];
        }
        else {
            history[nums[i]] = i;
        }
    }
    return [];
}
;
var ans = twoSum([2, 5, 7, 15], 22);
console.log(ans);
