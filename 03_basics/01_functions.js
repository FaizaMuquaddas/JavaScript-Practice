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

