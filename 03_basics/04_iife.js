// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

//WHY do we need this?
// example we need a file where we want as soon as file satrts our database connection also starts working
// Avoid Global Variable Pollution: global scope variables we don't want others to access

(function cart(){
    console.log(`DB connected`);
    
})();  //we to end using ;


// we can also write it as arrow function way

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Faiza')







// Avoid Global Variable Pollution: By creating a local scope, IIFEs help prevent variables from leaking into the global scope, reducing the risk of conflicts with other code.

// Module Pattern: IIFEs can be used to create private variables and methods, simulating the concept of private scope in JavaScript.

// Initialization: They are often used for initialization tasks that need to be executed only once, like setting up event listeners or configuration.