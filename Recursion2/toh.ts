function toh(disc: number,s: string,d:string,h:string):void{
    if(disc == 0) return;
    toh(disc-1,s,h,d);
    console.log("Move disc",disc,"from",s,"to",d);
    toh(disc-1,h,d,s);
}

toh(7,"A","B","C")