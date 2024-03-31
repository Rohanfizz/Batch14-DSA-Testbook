function pattern3(n: number): void {
    for (let i = n; i >= 1; i--) {
        // I want to know how many stars and spaces are there
        // in this line
        let starsCount: number = i;
        let spacesCount: number = n - i;
        //Printing
        let s: string = "";
        for (let j = 1; j <= spacesCount; j++) {
            s += " ";
        }
        for (let j = 1; j <= starsCount; j++) {
            s += "*";
        }
        console.log(s);
    }
}
pattern3(5);
