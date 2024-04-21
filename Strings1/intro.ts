let myName: string = "Rohan"; // -> Rohxn

let strArray = myName.split(""); // Convert string array
strArray[3] = "x"; // change in array

myName = strArray.join(""); // convert array to string

console.log(myName);
console.log(myName[myName.length-1])