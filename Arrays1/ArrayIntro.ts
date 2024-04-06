let arr: number[] = [10, 20, 30, 40, 50, 60];
let fruits: string[] = ["Apple", "Orange", "Banana", "Watermelon"];
fruits.push("Mango");
console.log(fruits[fruits.length - 1]); // mango
fruits.pop();
console.log(fruits[fruits.length - 1]); // watermelon
fruits.shift();
console.log(fruits[0]); // Orange
fruits.unshift("Grapes");
console.log(fruits[0]); // Grapes
// Arrays elements are mutable
arr[2] = 100;
console.log(arr)