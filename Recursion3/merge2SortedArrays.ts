function merge2SortedArrays(a: number[], b: number[]): number[] {
    let c: number[] = [];

    let i = 0;
    let j = 0;

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            c.push(a[i]);
            i++;
        } else {
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
    } else {
        while (i < a.length) {
            c.push(a[i]);
            i++;
        }
    }
    return c;
}

function mergeSort(arr: number[], l: number, r: number): number[] {
    if (l == r) {
        // single element we return a single element in the array because single element is already sorted
        return [arr[l]];
    }
    let mid = Math.floor((l + r) / 2);

    let left = mergeSort(arr, l, mid);
    let right = mergeSort(arr, mid + 1, r);

    let mergedSortedArray = merge2SortedArrays(left,right)
    return mergedSortedArray
}
let arr = [5,3,2,7,9,1,4,8,6,0]
console.log(mergeSort(arr,0,arr.length-1))
