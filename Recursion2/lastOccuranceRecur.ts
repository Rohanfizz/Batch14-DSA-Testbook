function lastOccur(arr,idx,target) : number{
    if(idx == arr.length) return -1;
    let lastOccIdx = lastOccur(arr,idx+1,target);

    if(lastOccIdx == -1){
        if(arr[idx] == target){
            return idx;
        }else return -1;
    }else{
        return lastOccIdx;
    }
}

console.log(lastOccur([1,2,3],0,3))