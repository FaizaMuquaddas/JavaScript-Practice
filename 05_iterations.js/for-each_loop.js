// useful for iterating arrays, 
// most useful in database- we can access easily array, any value from it and inject easily from webpage or something   

const coding = ["js", "Java", "C", "cpp", "Rust", "Python"]

coding.forEach( function (item) {   //function will bring value from an array inside it as a pramater itself so defining name of a function is not necessary
        // console.log(item);
} )



// we can use arrow function as well
coding.forEach( (value) => {
    // console.log(value);
} )



// or
function printme(item){
    // console.log(item);
    
}

// coding.forEach(printme)




coding.forEach( (item, index, arr ) => {   //for each can have more access of paramters
        // console.log(item, index, arr);
} )


const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js",
    },
    {
        languageName: "Java",
        languageFileName: "java",
    },
    {
        languageName: "Python",
        languageFileName: "py",
    }
]

myCoding.forEach( (item) => {       //each item is Object in each iteration
    console.log(item.languageName);
})
