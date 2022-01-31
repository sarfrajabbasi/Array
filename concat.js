// concatenating two Arrays
const letters = ['Array','object','class'];
const numbers1 = [1,2,3];
const alphaNumeric = letters.concat(numbers1);
// console.log(alphaNumeric)



// Concatenating three arrays

const num1 = [1,2,3];
const num2 = [4,5,6];
const num3 = [7,8,9];
const numbers = num1.concat(num2,num3);
// console.log(numbers)



// Concatenating values to an array

const letters1 = ['a','b','c'];
const alphaNumeric1 = letters1.concat('sarfraj','abbbasi')
// console.log(alphaNumeric1);



// Concatenating nested arrays

const n1 = [[1,[5,6]]];
const n2 = [2, [3,['sarfraj']]];
const number2 = n1.concat(n2);
console.log(number2);
const console1 = n1[0].push(4);
// console.log(number2);
