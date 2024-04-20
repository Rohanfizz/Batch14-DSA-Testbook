function spiralOrder(arr: number[][]): number[] {
    let ans :number[] = [];

    let remainingEle =  arr.length * arr[0].length;

    let tw = 0;
    let bw = arr.length-1;
    let lw = 0;
    let rw = arr[0].length-1;

    while( remainingEle>0 ){
        //Top wall
        for(let j = lw; j<=rw && remainingEle>0 ;j++){
            ans.push( arr[tw][j] );
            remainingEle--;
        }
        tw++;
        //Right wall
        for(let i = tw;i<=bw && remainingEle>0;i++){
            ans.push( arr[i][rw] )
            remainingEle--;
        }
        rw--;
        //Bottom wall
        for(let j = rw;j>=lw && remainingEle>0;j--){
            ans.push( arr[bw][j] )
            remainingEle--;
        }
        bw--;
        //Left wall
        for(let i = bw;i>=tw && remainingEle>0;i--){
            ans.push( arr[i][lw] )
            remainingEle--;
        }
        lw++;
    }
    return ans;
};