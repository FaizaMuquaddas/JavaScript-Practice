
// why var shouldn't be used
let a = 300

if(true){
    let  a = 10
    const b = 20
    var c = 30
    // d = 40 this will cause issue too

    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);   run 1 by 1 each console and you will find out a,b throwing an error but c is not resulting output 30

// Q. global scope is differnt in node enivernment and on console is diff

function one(){
    const username = "Faiza"

    function two(){
        const website = "dicord.com"
        console.log(username); 
    }
    // console.log(website);  //cannot excess inner function
    two() //function calling 
}

// one()

if(true){
    const username = "Faiza"

    if(username === "Faiza"){
        const website = " Nykaa"
        console.log(username + website);
    }
    // console.log(website); //error
}
// console.log(username);  
//error

//--------------interesting--------------

console.log(addone(5))
function addone(num){
    return num + 1
}
// IN THE ABOVE SYNTAX WE CAN ACCESS FUNCTION BEFORE DECLARATION



addTwo(5)   //WE CANNOT ACCESS BEFORE DECALRATION IN THIS SYNTAX
const addTwo = function(num){
    return num + 2
}

