// Alternative
// Pre-allocate and explicitly iterate

var arr = [1,2,3,4];

arr.flatMap(x => [x,x * 2]);

var n = arr.length;
var acc = new Array(n * 2);
for (let i =0;i<n;i++){
    var x = arr[i];
    acc[i * 2] = x;
    acc[i * 2 + 1] = x * 2;
}



// Examples
// map() and flatMap()

let arr1 = [1,2,3,4];


// console.log(arr1.map(x => [x * 2]));
// console.log(arr1.flatMap(x => [x * 2]));

// console.log(arr1.flatMap(x=> [[x * 2]]));

let arr2 =["it's Sunny in","","California"];
// console.log(arr2.map(x => x.split(" ")));
// console.log(arr2.flatMap(x => x.split(" ")));

// For adding and removing items during a map()

let a = [5,4,-3,20,17,-33,-4,18];

console.log(a.flatMap((n)=> (n<0)? []:
(n % 2==0)?[n]:
[n-1,'yes']));