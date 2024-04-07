function linearSearch(arr: number[], tar: number): number {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] === tar) {
            return i;
        }
    }
    return -1;
}

// Binary search only works when the array is sorted.
function binarySearch(arr: number[], tar: number): number {
    let n = arr.length;
    let l = 0;
    let r = n - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] == tar) {
            return mid;
        } else if (arr[mid] < tar) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
}

let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 123, 144, 456];
let target = 456;
let idx = binarySearch(array, target);
console.log(idx);
