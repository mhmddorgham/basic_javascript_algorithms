// Reverse String using three different ways
let mystring = "Happy Year Coding!";

// 1. Using built-in functions : reverse() => convert the string to array
let firstMethod = mystring.split("").reverse().join("");
console.log(firstMethod);

// 2. Using for loop
let secondMethod = "";

for (let i = mystring.length - 1; i >= 0; i--) {
  secondMethod += mystring[i];
}

console.log(secondMethod);

// 3. Using higher order function - reduce
let thirdMethod = Array.from(mystring).reduce((prev, curr) => curr + prev);
console.log(thirdMethod);
