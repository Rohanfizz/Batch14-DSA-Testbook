function reverseRange(arr:number[],l,r):void{
    while(l<r){
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}
function rotate(arr: number[], k: number): void {
    let n=  arr.length;
    k = k%n; // 104 % 5 = 4
    reverseRange(arr,n-k,n-1)
    reverseRange(arr,0,n-k-1)
    reverseRange(arr,0,n-1)
};