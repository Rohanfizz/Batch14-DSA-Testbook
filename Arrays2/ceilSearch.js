function findCeil(arr, target) {
    var ceil = -Infinity;
    var l = 0;
    var r = arr.length - 1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            return arr[mid];
        }
        else if (arr[mid] > target) {
            r = mid - 1;
            ceil = arr[mid]; // Bacha ke rakh lia
        }
        else {
            l = mid + 1;
        }
    }
    return ceil;
}
var array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 123, 144, 456];
var target = 500;
var idx = findCeil(array, target);
console.log(idx);
