let score =  "45abc" 

console.log(typeof score);
console.log(typeof(score));   // another way of checking type 


let valueInNumber = Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber);

// INPUTS     => OUTPUTS
// 45         => number
// "45abc"    => NaN ; // not a number
// null       => 0
// undefined  => undefined
// true => 1; false =>0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1        => true
// 0        => false
// "name"   => true
// ""       => false

let higestScore = 67

let StringNumber = String(higestScore)

console.log(StringNumber);
console.log(typeof StringNumber);


// ******************* Operations ********************//

let value = 12
let negativeValue = -value
console.log(negativeValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3); // real world projects always use pranthesis

console.log(+true);   // output +true gives one as its boolean value but true+ won't work
console.log(+""); // 0=> tricky but its bad practice

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // can do it but  bad practice , readability should be high

let gameCounter = 100
gameCounter++ // postfix increment after using it
//++gameCounter prefix operator it increment value before using it
console.log(gameCounter);


