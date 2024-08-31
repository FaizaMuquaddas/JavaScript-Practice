const userEmail = []

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

//----FALSY VALUES----
// false
// 0
// -0
// BigInt
// 0n
// ""
// null
// undefined
// NaN



//----TRUTHY VALUES----
// "0"       ; because they are inside string
// 'false'
// " "
// [] 
// {}
// function(){} 

if(userEmail.length === 0){
    console.log("checking Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length){
    console.log("checking Object is empty");
}


// ----------------------------------------------------------------------------

// NULLISH COALESCING OPERATOR (??): null undefined

let val1;
// val1 = 5 ?? 10
// val = null ?? 10   it checks the null value for the saftey
// val1 = undefined ?? 15 
// val1 = null ? 10 ?? 15    first value it will get, assigned in this 10

console.log(val1);      

// ----------------------------------------------------------------------

// TERNIARY OPERATOR
// condition ? true : false


const Foundation = 1000
Foundation >= 1200 ? console.log("more than 1200") : console.log("less than 1200");


