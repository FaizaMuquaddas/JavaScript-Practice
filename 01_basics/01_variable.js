const accountId = 123
let accountEmail = "Beesley@123.com"
var accountPassword = "1234"

let accountState; //if we dont know the value we can still create the variable and can assign any value later, using semi-colon is totally optional

accountCountry = "India"// we can define a variable without using any keyword since JS is a very safe language so it will locate memeory to this variable without defining it


/*  1. var is also a keyword in Javascript but modern programming do not uses this because of issue of blocking scope and functiponal scope
    2. We cannot made changes if we are defining a const
    3. Changes and be done in let and var.

    lets see below if we can make changes 
*/


// accountId = 567 // not allowed because of its const type

accountEmail = "faiza@gmail"
accountPassword = "4340"

console.table([accountId, accountEmail, accountPassword,accountCountry, accountState])