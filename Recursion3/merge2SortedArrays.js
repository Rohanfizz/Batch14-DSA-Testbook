function merge2SortedArrays(a, b) {
    var c = [];
    var i = 0;
    var j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            c.push(a[i]);
            i++;
        }
        else {
            c.push(b[j]);
            j++;
        }
    }
    if (i == a.length) {
        // Add  all the remaining elements of array b
        while (j < b.length) {
            c.push(b[j]);
            j++;
        }
    }
    else {
        while (i < a.length) {
            c.push(a[i]);
            i++;
        }
    }
    return c;
}
function mergeSort(arr, l, r) {
    if (l == r) {
        // single element we return a single element in the array because single element is already sorted
        return [arr[l]];
    }
    var mid = Math.floor((l + r) / 2);
    var left = mergeSort(arr, l, mid);
    var right = mergeSort(arr, mid + 1, r);
    var mergedSortedArray = merge2SortedArrays(left, right);
    return mergedSortedArray;
}
var arr = [5, 3, 2, 7, 9, 1, 4, 8, 6, 0];
console.log(mergeSort(arr, 0, arr.length - 1));
