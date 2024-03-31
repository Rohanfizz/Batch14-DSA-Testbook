function pattern1(n: number) {
    // n lines
    for (let i = 1; i <= n; i++) {
        // this loop will run n times
        //every time we will print ith line
        let s: string = "";
        for (let j = 1; j <= i; j++) {
            s = s + "*";
        }
        console.log(s);
    }
}
pattern1(5);
