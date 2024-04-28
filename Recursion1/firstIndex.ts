function findFirstIdx(idx:number,target:number,arr:number[]) : number{
    if(idx == arr.length) return -1;
    if(arr[idx] == target) return idx;
    let ans = findFirstIdx(idx+1,target,arr);
    return ans;
}

function lastIndex(idx:number,target:number,arr:number[]) : number{
    if(idx < 0) return -1;
    if(arr[idx] == target) return idx;
    let ans = lastIndex(idx-1,target,arr)
    return ans;
}
let arr = [1,2,1,4,5]
console.log(lastIndex(arr.length-1,1,arr))