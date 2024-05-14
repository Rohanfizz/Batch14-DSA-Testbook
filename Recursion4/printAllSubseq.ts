function printAllSubseq(idx:number,asf:string,arr:number[]) : void{
    if(idx == arr.length){
        console.log(asf);
        return;
    }
    // pick arr[idx]
    printAllSubseq(idx+1,asf+arr[idx]+" ",arr)
    // Not pick
    printAllSubseq(idx+1,asf,arr)
}

let arr = [10,20,30]
printAllSubseq(0,"",arr)