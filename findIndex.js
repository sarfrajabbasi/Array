// Examples
// Find the index of a prime number in an array
// The following example returns the index of the first element in the array that is a prime number, or -1 if there is no prime number.

function isPrime(num){
    for (let i = 2;num >i;i++){
        if(num % i == 0){
            return false;
        }
    }
    return num >1;
}
// console.log([4,6,8,9,12].findIndex(isPrime));
// console.log([4,6,7,9,12].findIndex(isPrime));



// Find index using arrow function
// The following example finds the index of a fruit using an arrow function:

const fruits = ['apple','banana','cantaloupe','blueberries','grape'];

const  index = fruits.findIndex(fruit => fruit==='blueberries');
console.log(index)
console.log(fruits[index])