function findPath(i:number,j:number,psf:string,h:number,w:number){
    if(i > h || j > w) return;
    if(i == h && j == w){
        console.log(psf);
        return;
    }
    // i , j horizontally = i,j+1, psf + "H"
    findPath(i,j+1,psf+"H",h,w)
    // i , j vertically = i+1,j, psf + "V"
    findPath(i+1,j,psf+"V",h,w)
}

findPath(1,1,"",3,4)