function sayMyName(){
    console.log("Faiza");
    console.log("Muquaddas");
    console.log("FM");
}

// sayMyName()

// add two numbers

function add_two_num(num1, num2){  //function defination parameters (num1, num2)
    // console.log(num1 + num2); 
    // let result = num1 + num2
    // return result
    return num1 + num2

}
//arguments: passing values
const result = add_two_num(2,8) // add_two_num(2."3") :- "3" will be treated as a number
// console.log("Result: ", result);



function loginUser_message(username = "User"){  // = "User" is given a default value which can be orride if we pass new value later
    if(!username){  //if(username === undefined) 
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUser_message("Faiza"));
console.log(loginUser_message());  //output-> undefined if value is not given



// passing different types of parameters
// example in shopping apps user keeps adding unpredicated items to it and we have to keep adding accordingly so, in this situtation we dont know how many arguments to give and parameters to give

function calculate_cartPrice(...num1){  //... means rest operator depends on use case it is also spread
return num1
}

// console.log(calculate_cartPrice(200, 400, 500, 800));


// Q. Interview question sometimes asks 
// function calc(val1, val2, ...num1){
// }
// console.log(calculate_cartPrice(200, 400, 500, 800));
// where these (val1, val2, ...num1) values will go

// ANS. so 200 and 400 will go in val1 and val2,  rest values will go in array of ...num1


const user = {
    item: "bag",
    price: 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.item} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    item: "chocolate",
    price: 299
})

// can also pass arrays
const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]));
