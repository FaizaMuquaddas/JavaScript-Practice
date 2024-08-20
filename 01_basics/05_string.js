const name = "faiza"
const age = 25

console.log(name + " " + age + " " + "edu-UG"); //outdated syntax not a good practice

console.log(`Hello! My name is ${name.toLocaleUpperCase()}. I am ${age} years old.`); /*``  these back ticks are called string interpolation using this is 
                                                                                        a modern way of using string. we can also use methods in it too as we did in name*/

//but using .toUpperCase() or lower wont make changes to original string rather it will make changes in the copy of the string
// console.log(gameName.__proto__);   //it shows the object in the output which is not actually empty but have list protoypes inside

console.log(name.charAt(2)); //gives the charcter present on the particular index eg 2 in this
console.log(name.indexOf('z')); //checks the psoditon of the character

const gameName = new String(`sekiro`)

const newString = gameName.substring(0,4)
console.log(newString);  //last value given will not get printed 
                        // we cant give -ve values in substring it will not read it and will start printing from 0th index

const anotherString = gameName.slice(-4,6) // giving -ve values will result in output printing in reverse order
console.log(anotherString);

const newStringOne = '   Fable  ' // as an example we don't need spaces in email, passwords in my database
console.log(newStringOne);
console.log(newStringOne.trim());   // there is also trimstart() and trimend() methods

const url = 'www.example-01%20javascript'
console.log(url.replace('%20', '-'));  
console.log(url.includes('method')); //it shows whether asked keyword is available in the string or not

const favShow = new String ('the-office-sitcom-all-time-favorite')
console.log(favShow.split('-')); //split uses to covert string into array




