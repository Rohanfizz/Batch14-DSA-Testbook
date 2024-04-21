//Write a function, which takes a string and prints all the palindromic substrings
function printAllPalindromicSubstrings(s) {
    for (var i = 0; i < s.length; i++) {
        for (var j = i; j < s.length; j++) {
            var currSubstring = s.substring(i, j + 1);
            if (isPalindrome(currSubstring)) {
                console.log(currSubstring);
            }
        }
    }
}
function isPalindrome(s) {
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        if (s[i] != s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
console.log(printAllPalindromicSubstrings("naman"));
