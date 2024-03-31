function pattern2(n: number) {
    // n lines
    for (let i = n; i >= 1; i--) {
        // this loop will run n times
        //every time we will print ith line
        let s: string = "";
        for (let j = 1; j <= i; j++) {
            s = s + "*";
        }
        console.log(s);
    }
}
pattern2(5);
