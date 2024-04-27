function stringWithDiffOf2Characters(s) {
    var ans = "";
    ans += s[0];
    for (var i = 0; i + 1 < s.length; i++) {
        var asciiPrev = s.charCodeAt(i);
        var asciiNext = s.charCodeAt(i + 1);
        var diff = asciiNext - asciiPrev;
        ans += diff;
        ans += s[i + 1];
    }
    return ans;
}
var ans = stringWithDiffOf2Characters("abcCDF");
console.log(ans);
