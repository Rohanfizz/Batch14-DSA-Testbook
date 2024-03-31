function pattern4(n: number) {
    let starCount = 1;
    let spaceCount = Math.floor(n / 2);

    for (let i = 1; i <= n; i++) {
        // print this line
        let s: string = "";
        for (let j = 1; j <= spaceCount; j++) s += " ";
        for (let j = 1; j <= starCount; j++) s += "*";
        console.log(s); // this line has been printed

        if (i < n / 2) {
            //first half
            starCount += 2;
            spaceCount -= 1;
        } else {
            //second half
            starCount -= 2;
            spaceCount += 1;
        }
    }
}

pattern4(21);
