function findCeil(arr: number[], target: number): number {
    let ceil = -Infinity;
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            return arr[mid];
        } else if (arr[mid] > target) {
            r = mid - 1;
            ceil = arr[mid]; // Bacha ke rakh lia
        } else {
            l = mid + 1;
        }
    }
    return ceil;
}
let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 123, 144, 456];
let target = 500;
let idx = findCeil(array, target);
console.log(idx);
