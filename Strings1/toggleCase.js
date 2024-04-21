function toggleCase(s) {
    var ans = "";
    for (var i = 0; i < s.length; i++) {
        //ascii code of s[i]
        var ascii = s.charCodeAt(i);
        if (ascii >= 97) {
            // we are lowercase
            ascii -= 32; // we will become uppercase
        }
        else {
            ascii += 32; // we will become lowercase
        }
        // convert ascii to char
        var char = String.fromCharCode(ascii);
        ans += char;
    }
    return ans;
}
console.log(toggleCase("aBcDeFG"));
