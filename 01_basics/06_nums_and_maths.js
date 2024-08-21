const score = 858 //js automatically defines that type is number
console.log(score);

const balance = new Number(1000)  //defines explicitly that given value is a number
console.log(balance);

//console.log(balance.toString());   //why it is useful
console.log(balance.toString().length); //by doing this we can accessaditional methods of string example we can find the length of the number

console.log(balance.toFixed(2)); //very useful method to get the precison values

const price = 879.9943
console.log(price.toPrecision(3)); //precision upto 3 digits

const price_2 = 7435.8943
console.log(price_2.toPrecision(5)); // upto 4 digit

const price_3 = 84579.9943
console.log(price_3.toPrecision(3)); //carefully use this method 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //using 'en-IN' will use indian format instead of US


/* PROTOTYPES OF NUMBERS

<prototype>: Number { 0 }

constructor: function Number()
EPSILON: 2.220446049250313e-16
MAX_SAFE_INTEGER: 9007199254740991
MAX_VALUE: 1.7976931348623157e+308
MIN_SAFE_INTEGER: -9007199254740991
MIN_VALUE: 5e-324
NEGATIVE_INFINITY: -Infinity
NaN: NaN
POSITIVE_INFINITY: Infinity

isFinite: function isFinite()
isInteger: function isInteger()
isNaN: function isNaN()
isSafeInteger: function isSafeInteger()

parseFloat: function parseFloat()
parseInt: function parseInt()

<prototype>: function ()
toExponential: function toExponential()
toFixed: function toFixed()
toLocaleString: function toLocaleString()
toPrecision: function toPrecision()
toString: function toString()
valueOf: function valueOf()
*/


//----------------------- Maths --------------------------
//maths library is a default in javascript

console.log(Math);
console.log(Math.abs(-12)); //abs - absolute: coverts -ve values into +ve
console.log(Math.round(5.8));
console.log(Math.ceil(5.1));
console.log(Math.floor(5.6));
console.log(Math.min(4,5,3,8));
console.log(Math.max(4,5,3,8));

console.log(Math.random()); //gives values always b/w 0-1
console.log((Math.random()*10 )+ 1); // by adding 1 to avoid case where we can get value like 0.01987654678 something basically to avoid 0.01, 0.1

const min = 10
const max = 20

// making formula to get the values between 10-20
//(max-min + 1) this will gives values even of single digit
// ((max - min + 1) + min ) miin is 10 so we wanted min 10 so add min 

console.log(Math.floor(Math.random()* (max-min + 1) + (min)));

