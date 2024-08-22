//Date is an object in JavaScript

let myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toString());

// to declare specific date

let myCreatedDated = new Date(2024,7,22)   //Months starts from 0 in JS (treated as an array)
console.log(myCreatedDated.toLocaleString());

let specificDateFormat = new Date("12-01-2024") //DD/MM/YY or we can use MM/DD/YY
console.log(specificDateFormat.toLocaleString());

let myTimeStamp = Date.now();  //it gives time in mili seconds
console.log(myTimeStamp);
console.log(specificDateFormat.getTime());  //via get we can compare time it is very useful in projects where are booking something eg: hotel booking

//Q. How can we change time in seconds
console.log(Math.floor(Date.now()/1000)); //only dividing by 1000 will give decimal value as well thats why using floor or round is better solution for whole value

//What if we want to know only month or year 
let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);  // using +1 is important because JS 
console.log(newDate.getFullYear());

//more customization options
let date2 = new Date();
const options = {
    weekday: "long",
    timeZone: "Asia/Kolkata",
    timeZoneName: "long",
    hour: "numeric",
    minute: "numeric"
};
console.log(date2.toLocaleString('default',options));


//direct in console
console.log(newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: "Asia/Kolkata"
}));

