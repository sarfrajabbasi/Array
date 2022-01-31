// Example

// Find an object in an array by one of its properties

const inventory = [
    {name:'apples',quantity:2}, 
    {name:'bananas',quantity:0}, 
    {name:'cherries',quantity:5}
];
function ischerries(fruit){
    return fruit.name === 'cherries';
}
// console.log(inventory.find(ischerries));

// Using arrow function and destructuring

const inventory1 = [
    {name:'apples',quantity:2}, 
    {name:'bananas',quantity:0}, 
    {name:'cherries',quantity:5}

    
];

const result = inventory1.find(({name}) => name === 'cherries');
// console.log(result)

// Find a prime number in an array

function isPrime(element,index,array){
    let start = 2;
    while (start <= Math.sqrt(element)){
        if(element % start++ < 1){
            return false;
        }
    }
    return element >1;
}
// console.log([4,6,8,12].find(isPrime));
// console.log([4,5,8,12].find(isPrime));

// The following examples show that nonexistent and deleted elements are visited, and that the value passed to the callback is their value when visited:

const array = [0,1,,,,5,6];
array.find(function(value,index){
    console.log('visited index',index,'with value',value);
});
array.find(function(value ,index){
    if(index===0){
        console.log('deleting array[5] with value',array[5]);
        delete array[5]
    }
    console.log('visited index',index ,'with value',array[5]);
})