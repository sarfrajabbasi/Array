// Examples
// No operation for uninitialized values (sparse arrays)

const arraySparse =[1,2,,5];
let numCallbackRuns = 0;

arraySparse.forEach(function(element){
    console.log(element)
    numCallbackRuns++

})
console.log("numCallbackRuns:",numCallbackRuns)

// Converting a for loop to forEach

const items = ['item1','item2','item3'];
const copyItems = [];
for(let i = 0;i<items.length;i++){
    console.log(copyItems.push(items[i]))
} 
items.forEach(function(item){
    console.log(copyItems.push(item))
})

// Printing the contents of an array

function logArrayEleElements(element,index,array){
    console.log('a['+index + '] = ' + element)
}

// console.log([3,4,,7].forEach(logArrayEleElements))

// Using thisArg