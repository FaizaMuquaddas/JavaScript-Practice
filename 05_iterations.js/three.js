// for of loop

//we can get values from objects in these types of loops
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const value of arr) {   
    // console.log(value);
}

// -----------------------
const greetings = "Hello User!"
for (const greet of greetings){
    if(greet == " "){
        continue
    }
    // console.log(`Each char is: ${greet}`)
}

// MAPS: remembers the orders of the key as well, they don't hold duplicate values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('USA', "United States of America")   //ignored this beacuse redundent

// console.log(map);

for(const [key, value]of map){
    // console.log(key, ': ', value);
}


// for(const key in map){     //not iteratable map in this way
//     console.log(key);  
// }