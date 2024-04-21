var s = "Rohan";
function printAllSubstrings(s) {
    for (var i = 0; i < s.length; i++) {
        for (var j = i; j < s.length; j++) {
            console.log(s.substring(i, j + 1));
        }
    }
}
printAllSubstrings(s);
