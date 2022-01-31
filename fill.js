// Using fill
console.log([1,2,3].fill(4));
console.log([1,2,3].fill(4));
console.log([1,2,3].fill(4,1));
console.log([1,2,3].fill(4,1,2));
console.log([1,2,3].fill(4,1,1));
console.log([1,2,3].fill(4,3,3));
console.log([1,2,3].fill(4,-3,-2));
console.log([1,2,3].fill(4,NaN,NaN));
console.log([1,2,3].fill(4,3,5));
console.log(Array(3).fill(4));
console.log([].fill.call({length:3},4));
let arr = Array(3).fill({})
console.log(arr);
arr[0].hi = 'helloWorld';


// Using fill() to create a matrix of all 1

const arr1  = new Array(3);
for (let i = 0; i<arr1.length;i++){
  arr1[i] = new Array(4).fill(1)
}
arr1[0][0]=10;
console.log(arr1);
console.log(arr1[0][0]);
console.log(arr1[1][0]);
console.log(arr1[2][0]);


// Using fill() to populate an empty array

let tempGirls =Array(5).fill('girl',0)
console.log(tempGirls);