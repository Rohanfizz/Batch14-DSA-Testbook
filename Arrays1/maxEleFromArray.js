function maxEle(arr) {
    var maxi = -Infinity;
    var idx = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxi) {
            maxi = arr[i];
            idx = i;
        }
    }
    console.log(maxi, idx);
}
maxEle([6, 3, 2, 4, 7, 6, 9, 3]);
