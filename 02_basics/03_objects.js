// singleton -> objects made with the help of constructor
// object.create
// object literal


const JsUser = {
    // name: "Faiza",  //we can define our keys as well in object
    // "Full name": "faiza",
    age: 25,
    location: "delhi",
    email: "faiza@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Friday"]
}


console.log(JsUser.name);  //method-1, but as name: "Faiza" name here is treateda as a string and we can also define it as - "name" : "Faiza"
// console.log(JsUser["Full name"]); , cannot access using JsUser.full name
