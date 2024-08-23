//ref doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// arrays aren't primitives but are instead Array objects
//resizable and can contain a mix of different data types
//array-copy operations create shallow copies

const myArray = [0, 1, 2, 3, 4, 5]
const shows = ["friends" , "the-Office", "legion"]
const myArr = new Array(1,2,3,4,5)

console.log(shows[2]);

// Array Methods

// myArray.push(6,7,8); //adds value
// myArray.pop() //removes only last value
// myArray.unshift(8) //Inserting a value at the 0th index is not optimal, especially with a large dataset (e.g., 10,000 entries), 
//                 //as it requires shifting all elements. However, if necessary, this approach can still be used.

// myArray.shift() //no paramters, starting value removes
// console.log(myArray.includes(9));//gives result TRUE/FALSE
// console.log(myArray.indexOf(4)); //if asked value does not exist in arr then it will always gives -1 output

// const myArr2 = myArr.join()
// console.log(myArr);
// console.log(myArr2); //join converts string into a String type and adds array
// console.log(typeof myArr2);

// SLICE, SPLICE

console.log("Original Array: ", myArray);

const myN1 = myArray.slice(1,3)

console.log("Slice Array: ", myN1);
console.log("B ", myArray);

const myN2 = myArray.splice(1,3)
console.log("C: ", myArray);
console.log("Splice Array: ", myN2);


