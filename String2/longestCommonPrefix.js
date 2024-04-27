function longestCommonPrefix(arr) {
    var ans = "";
    for (var i = 0; i < arr[0].length; i++) {
        for (var j = 1; j < arr.length; j++) {
            //jth word is smaller than the index we are trying to access
            if (arr[j].length == i)
                return ans;
            //jth word has ith character
            if (arr[0][i] != arr[j][i])
                return ans;
        }
        ans += arr[0][i];
    }
    return ans;
};
var res = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(res);