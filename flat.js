// Alternatives

// reduce and concat

const arr = [1,2,3,[4,5]];
// console.log(arr.flat());

arr.reduce((acc,val) => acc.concat(val),[]);
// console.log(arr);

const flattend = arr => [].concat(...arr);
// console.log(flattend)

// reduce + concat + isArray + recursivity

const arr1 =[1,2,[3,4,[5,6]]];
function flatDeep(arr1,d=1){
    return d > 0 ? arr1.reduce((acc,val) => acc.concat(Array.isArray(val)? flatDeep(val,d-1) : val),[])
    :arr1.slice();
}

// console.log(flatDeep(arr1,Infinity))


// Use a stack

function flatten(input){
    const stack =[...input];
    const res = [];
    while (stack.length){
        const next = stack.pop();
        if(Array.isArray(next)){
            stack.push(...next);
        
        }else{
            res.push(next);
        }
    }
    return res.reverse();
}



const arr2 = [1,2,[3,4,[5,6]]];
// console.log(flatten(arr2));


// Use Generator function

function* flatten(array,depth){
    if(depth === undefined){
        depth =1;
    }
    for(const item of array){
        if(Array.isArray(item) && depth >0){
            yield* flatten(item ,depth-1);
        }else{
            yield item;
        }
    }
}
const arr3 = [1,2,[3,4,[5,6]]];
const flatten1 =[...flatten(arr3,Infinity)];
// console.log(flatten1);


// Examples
// Flattening nested arrays

const arr4 =[1,2,[3,4]];

console.log(arr4.flat());
const arr21 = [1, 2, [3, 4, [5, 6]]];
console.log(arr21.flat());
// [1, 2, 3, 4, [5, 6]]

const arr31 = [1, 2, [3, 4, [5, 6]]];
console.log(arr31.flat(2));
// [1, 2, 3, 4, 5, 6]

const arr41 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr41.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Flattening and array holes

const arr51 = [1,2,,4,5];

console.log(arr51.flat());