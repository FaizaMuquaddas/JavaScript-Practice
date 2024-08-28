const Youtube_User = new Object()

// const Youtube_User2 {
// }

Youtube_User.Id = "Faiza123"
Youtube_User.name = "Faiza Muquaddas"
Youtube_User.isSubscriber = true

// console.log(Youtube_User);

const regular_user = {
    email: "faiza@gmaul.com",
    full_name:{
        user_fullname:{
            firstname: "Faiza",
            lastname: "Muquaddas"
        }
    }
}

// console.log(regular_user.full_name.firstname);

// // optional chaining: example what is full name doesn't exist
// console.log(regular_user.full_name?.firstname);//this syntax is useful when resonse is coming from an API that if it presents than do this

// combining objects

const object1 = {1:"a", 2:"b", 3:"c"}
const object2 = {7:"a", 8:"b", 9:"c"}

// const object3 = {object1, object2}
// console.log(object3);  //problem: object inside object

// Method 1
const obj3 = Object.assign({}, object1, object2)  //Object.assign(target) or Object.assign(target, source1)
// console.log(obj3);

//Method2
const obj3_1 = {...object1, ...object2}
// console.log(obj3_1);

const users = [
    {
        id: 1,
        email: "faiza@gmail.com"
    },
    {
        id: 2,
        email: "f@gmail.com"
    },
    {
        id: 3,
        email: "m@gmail.com"
    },
] //if we recieve users suppose from database we will recive in from of array of objects

users[1].email
// console.log(Youtube_User);

// console.log(Object.keys(Youtube_User)); //datatype of output value
// console.log(Object.values(Youtube_User));
// console.log(Object.entries(Youtube_User));

// console.log(Youtube_User.hasOwnProperty('isSubscriber'));


//structure, destructure
const flat = {
    rooms:"2",
    rent: "20000",
    areaName: "abul fazal"
}

const {areaName: area} = flat  //we can shorten name areaName: area
console.log(area);


//JSON

// API in form of object

// {
//     "name": "Faiza"
//     "profession": "Software devloper"
//     "gender": "Female"
// }

// array format API
// [
// 
// ]