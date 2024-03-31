function pattern1(n) {
    // n lines
    for (var i = 1; i <= n; i++) {
        // this loop will run n times
        //every time we will print ith line
        var s = "";
        for (var j = 1; j <= i; j++) {
            s = s + "*";
        }
        console.log(s);
    }
}
pattern1(10);
