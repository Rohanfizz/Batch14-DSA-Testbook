let arr: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
];

function iteration1(arr: number[][]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            console.log(arr[i][j]);
        }
    }
}
function iteration2(arr: number[][]): void {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < arr[0].length; j++) {
            console.log(arr[i][j]);
        }
    }
}
iteration2(arr);
