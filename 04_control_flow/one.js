// <, >, <=, >=, ==, !=, ===, !==

const isUserLoggedIn = true
const temperature = 52
if(temperature < 50){
    // console.log("less than 50");
}
else{
    // console.log("greater than 50");
}


const score = 200
if(score > 100){
    const power = "2x"
    // console.log(`User power: ${power}`);
}

// console.log(`User power: ` ${power});      error power not defined; scope


const balance = 1000
// if(balance > 500) console.log("yes");   //without using{} scope we can also use but it will work only in single line 
// if (balance > 500) console.log("test"),console.log("test2");  never use this syntax bad practice

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to purchase an item");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}

