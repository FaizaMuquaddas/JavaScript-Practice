let score =  "45abc" 

console.log(typeof score);
console.log(typeof(score));

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



