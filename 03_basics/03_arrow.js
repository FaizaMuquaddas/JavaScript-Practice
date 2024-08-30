const user = {
    username: "Faiza",
    price: "499",

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to this website`);   //access current contents of our variable in this scope we use "this" keyword
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "Beesley" //changed the current context
// user.welcomeMessage()
// console.log(this);  //solely running this -> {} -> empty object why? accessing in node environement

// objects in browsers are all window objects

// function game(){
//     console.log(this)
// }

// game()  //now getting lot of values in this node environment

// ------------------------------------------------------------------------

// function color(){
//     const primaryColor = "White"
//     console.log(this.primaryColor)   //output -> undefined -> cannot access "THIS" in function
// }

// color()

// --------------------------------------------------------------------------

// const coding = function(){
//     let language = "JavaScript"
//     console.log(this.language);  //undefined
    
// }

// coding()

const coding = () => {
    let language = "JavaScript"
    console.log(this);
    console.log(this.language);
}

// coding()

// -------------------------------------ARROW FUNCTION-----------------------------------

// basic method
const addTwoNumbers = (num1, num2) => {
    return num1 + num2
}

console.log(addTwoNumbers(5, 5))


// more method , implicit return

const addTwoNum = (num1, num2) => num1 + num2
console.log(addTwoNum(5, 8))

// OR

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(5, 15))

// NOTE: return statement is only necessary to use when using {} these curly brackets but doesn't need when using () paranthesis

//*********perks of using ()

const OaddTwo = (num1, num2) => ({username: "Faiza"}) //cannot return object without using paranthesis or it will give undefined output
console.log(addTwo(5, 15))

