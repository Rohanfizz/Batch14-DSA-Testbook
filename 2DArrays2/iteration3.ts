let arr = [
    [2, 3, 4],
    [6, 3, 9],
    [11, 1, 2],
    [7, 8, 5],
];

for(let j = arr[0].length-1; j>=0 ; j--){
    for(let i = 0;i<arr.length;i++){
        console.log(arr[i][j])
    }
}