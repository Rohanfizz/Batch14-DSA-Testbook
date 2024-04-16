var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
];
function iteration1(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            console.log(arr[i][j]);
        }
    }
}
function iteration2(arr) {
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < arr[0].length; j++) {
            console.log(arr[i - 1][j]);
        }
    }
}
iteration2(arr);
