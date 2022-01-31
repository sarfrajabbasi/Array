
// Species in ordinary objects

Array[Symbol.species];// function Array()



// Species in derived objects

class MyArray extends Array {
  
  static get [Symbol.species]() { return Array; }
}
console.log(MyArray)