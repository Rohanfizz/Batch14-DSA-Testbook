function toggleCase(s: string): string {
    let ans = "";

    for (let i = 0; i < s.length; i++) {
        //ascii code of s[i]
        let ascii = s.charCodeAt(i);

        if (ascii >= 97) {
            // we are lowercase
            ascii -= 32; // we will become uppercase
        } else {
            ascii += 32; // we will become lowercase
        }
        // convert ascii to char
        let char = String.fromCharCode(ascii);
        ans += char;
    }
    return ans;
}
console.log(toggleCase("aBcDeFG"))