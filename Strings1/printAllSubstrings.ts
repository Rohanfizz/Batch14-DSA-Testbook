let s = "Rohan"

function printAllSubstrings(s:string) : void {
    for( let i = 0;i<s.length;i++){ //0
        for(let j = i;j<s.length;j++){ //0
            console.log(s.substring(i,j+1)) // [0,1) 
        }
    }
}

printAllSubstrings(s)