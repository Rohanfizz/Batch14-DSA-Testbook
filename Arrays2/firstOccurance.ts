function firstOccurance(arr: number[], target: number): number {
    let ans = -1;
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] == target) {
            ans = mid;
            r = mid - 1;
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}
let array = [ 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 7, 7]
let target = 2;
let idx = firstOccurance(array, target);
console.log(idx);
