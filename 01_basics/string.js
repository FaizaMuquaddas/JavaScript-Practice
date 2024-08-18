const name = "faiza"
const age = 25

console.log(name + " " + age + " " + "edu-UG"); //outdated syntax not a good practice

console.log(`Hello! My name is ${name.toLocaleUpperCase()}. I am ${age} years old.`); /*``  these back ticks are called string interpolation using this is 
                                                                                        a modern way of writing using string. we can also use methods in it too as we did in name*/

//but using .toUpperCase() or lower wont make changes to original stringrather it will make changes in the copy of the string

console.log(name.charAt(2)); //gives the charcter present on the particular index eg 2 in this
console.log(name.indexOf('z')); //checks the psoditon of the character

const gameName = new String(`hello`)