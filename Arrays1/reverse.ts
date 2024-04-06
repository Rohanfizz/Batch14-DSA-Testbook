function reverseArray(arr: number[]): number[] {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        // swap arr[l], arr[r]
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}
function reverseArrayRange(arr: number[],l:number,r:number): number[] {
    while (l < r) {
        // swap arr[l], arr[r]
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}
let arr = [1,2,3,4,5,6,7];
let rev = reverseArrayRange(arr,1,3);
console.log(rev);