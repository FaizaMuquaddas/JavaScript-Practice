/*divided into two main categories of data types :- 

1)Primitive : Number, Boolean, Symbol, null, undefined, BigInt, String
2)Non-Primitive (reference) :- Array, Objects, functions*/

// primitive - 7 types

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);     //symbol actually uses to make a unique variable 

// const bigNumber = 3456543576654356754n   ---explicitly using n it compiler will read it as a BigInt type


/* type 2 : Reference (Non- Primitive)
            Array, Functions, Objects*/

let gender = ["Male", "Female", "Third-Gender"];

let myObj = { 
    name: "Faiza", 
    age: 25, 
    gender: "female"
}

const myFunction = function(){
    console.log("hello World!");
}                                  

console.log(typeof myFunction)
 //type of function returns function but it is known as object function


// ----------------Memory storage type--------------------//
// Stack (Primitive), Heap(Non-Primitive)


let myInstaId = "faizaMuquaddas"
anotherName = "coder"

console.log(myInstaId);
console.log(anotherName);

let user_1 = {
    name: faiza,
    age: 25
}

let user_2 = user_1

user_2.name = "Aani"

console.log();

// conclusion: Stack- Changes made to values stored in the stack will affect their copied values
// Heap- whereas changes made to values in the heap will directly modify the original value."
