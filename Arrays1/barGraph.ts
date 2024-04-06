function maxEle(arr: number[]): number {
    let maxi: number = -Infinity;
    let idx: number = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxi) {
            maxi = arr[i];
            idx = i;
        }
    }
    return maxi;
}

function barGraph(arr: number[]) {
    let maxi = maxEle(arr);
    let n = arr.length;

    for (let floor = maxi; floor >= 1; floor--) {
        let s = "";
        for (let i = 0; i < n; i++) {
            if (arr[i] >= floor) {
                // if arr[i] is bigger or equal to floor, this means, we can reach the floor
                s += "*\t";
            } else {
                s += "\t";
            }
        }
        console.log(s);
    }
    // let s = "";
    // for(let i = 0;i<n;i++){
    //     s+=arr[i]+"\t"
    // }
    // console.log(s)
}

barGraph([5,2,4,1,3,2])