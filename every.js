const current = (currentValue) => currentValue < 100;

const array1 = [10, 30, 39, 29, 10, 13];

// console.log(array1.every(current));
// expected output: true



// Testing size of all array elements

function isBigEnough(element,index,array){
  return element >10;

}
// console.log([12,5,14,8,55,123].every(isBigEnough));
// console.log([12,54,14,80,55,123].every(isBigEnough));




// Check if one array is a subset of another array

function isSubset(array1,array2){
  return array2.every(function(element){
    return array1.includes(element);
  })
}
// console.log(isSubset([1,2,3,4,5,6,7,8,],[5,7,6]));
// console.log(isSubset([1,2,3,4,5,6,7,8,],[5,8,71]));



// Using arrow functions


// console.log([12,5,8,130,44].every(x=> x >= 10))
// console.log([12,54,18,130,44].every(x=> x >= 10))


// Affecting Initial Array (modifying, appending, and deleting)


//Modifying items

let arr = [1,2,3,4];
arr.every((elem ,index,arr) => {
  arr[index+1] -= 1
  console.log(`[$(arr)][${index}]-> ${elem}`)
  return elem < 2
})

// Appending items

arr = [1,2,3];
arr.every((elem,index,arr)=>{
  arr.push('new')
  console.log(`[${arr}][${index}->${elem}]`)
  return elem < 4
})

// Deleting items

arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) => {
  arr.pop()
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4;
})
