//ref doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// arrays aren't primitives but are instead Array objects
//resizable and can contain a mix of different data types
//array-copy operations create shallow copies

const myArray = [0, 1, 2, 3, 4, 5]
const shows = ["friends" , "the-Office", "legion"]
const myArr = new Array(1,2,3,4,5)

console.log(shows[2]);

// Array Methods

myArray.push(6,7,8); //adds value
myArray.pop() //removes only last value
myArray.unshift(8) //Inserting a value at the 0th index is not optimal, especially with a large dataset (e.g., 10,000 entries), 
                //as it requires shifting all elements. However, if necessary, this approach can still be used.

myArray.shift() //no paramters, starting value removes
console.log(myArray.includes(9));//gives result TRUE/FALSE
console.log(myArray.indexOf(4)); //if asked value does not exist in arr then it will always gives -1 output

const myArr2 = myArr.join()
console.log(myArr);
console.log(myArr2); //join converts string into a String type and adds array
console.log(typeof myArr2);

// SLICE, SPLICE

const demoArray = [0,1,2,3,4,5]
console.log("Original Array: ", demoArray);  

const myN1 = demoArray.slice(1,3)

console.log("Slice Array: ", myN1);
console.log("B ", demoArray);

const myN2 = demoArray.splice(1,3)
console.log("C: ", demoArray);
console.log("Splice Array: ", myN2);

// SUMMARY
// SLICE: Does not modify the original array; it returns a new array. (NOTE: it does not modify the original array, it creates the shallow copy instead)
// SPLICE: Modifies the original array and returns the removed elements.

//Furthermore: Splice is removing (1,2,3) in this case and modifying the original array to [0,4,5] 

// METHODS
// at: function at()
// concat: function concat()
// constructor: function Array()
// copyWithin: function copyWithin()
// entries: function entries()
// every: function every()
// fill: function fill()
// filter: function filter()
// find: function find()
// findIndex: function findIndex()
// findLast: function findLast()
// findLastIndex: function findLastIndex()
// flat: function flat()
// flatMap: function flatMap()
// forEach: function forEach()
// includes: function includes()
// indexOf: function indexOf()
// join: function join()
// keys: function keys()
// lastIndexOf: function lastIndexOf()
// length: 0
// map: function map()
// pop: function pop()
// push: function push()
// reduce: function reduce()
// reduceRight: function reduceRight()
// reverse: function reverse()
// shift: function shift()
// slice: function slice()
// some: function some()
// sort: function sort()
// splice: function splice()
// toLocaleString: function toLocaleString()
// toReversed: function toReversed()
// toSorted: function toSorted()
// toSpliced: function toSpliced()
// toString: function toString()
// unshift: function unshift()
// values: function values()
// with: function with()

