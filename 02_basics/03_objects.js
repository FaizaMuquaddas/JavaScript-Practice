// singleton -> objects made with the help of constructor
// object.create
// object literal

const mySym2 = Symbol("Key2")

const JsUser = {
    name: "Faiza",  //Keys can be defined in Objects of Js 
    // "Full name": "faiza",
    [mySym2]: "Key2",
    age: 25,
    location: "delhi",
    email: "faiza@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Friday"]
}

console.log(JsUser.name);  //method-1, but as name: "Faiza" name here is treateda as a string and we can also define it as - "name" : "Faiza"
// console.log(JsUser["Full name"]); , cannot access using JsUser.full name
console.log(JsUser["name"])


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
// SYMBOL AS A KEY
//how can we use this symbol as a key
// ******or interview Q, {take symbol and add into keys of object and print it}
// const mySym = Symbol("key1")

// const example  = {
//     mySym: "myKey1"
// }

// console.log(example["mySym"]); //correct output but its is not getting read as symbol
// // console.log(typeof example["mySym"]); //type String but we wanted Symbol?????
// console.log();

// -------------------------------------------------------------------------------------------------------------------
// const Id = Symbol("key1")                                                                                         |
// const example  = {                                                                                                |
//     [Id]: "myKey1"                                                                                                |
// }                                                                                                                 |
//                                                                                                                   |
// console.log(typeof example[Id]);  //typeof Id ->"symbol"                                                          |
//                                   //typeof example[Id] -> "string" (since the value stored is "myKey1")           |
//                                                                                                                   |
// -------------------------------------------------------------------------------------------------------------------


JsUser.email = "faiza.ac@gmail.in"  //override value
console.log(JsUser);

// Object.freeze(JsUser)
JsUser.email = "Faiza@arcade.com"
console.log(JsUser); //freeze on object will not let allow made any changes but overriding won't throw an error either

// we can treat function as varibales as well
JsUser.greetings = function(){
    console.log("Hello! Js User");
}
JsUser.greetings_2 = function(){
    console.log('Hello Js User, ${this.name}');
    
}

console.log(JsUser.greetings); //[Function (anonymous)]  -> output meaning function not executed ony ref we get
console.log(JsUser.greetings());
console.log(JsUser.greetings_2());



