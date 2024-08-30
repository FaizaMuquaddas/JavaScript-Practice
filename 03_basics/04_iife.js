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

