// for

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

// for inside for

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        // console.log(i + '*' + j + '=' + i*j);

    }
    // console.log("outer loop value: ", i);

}

//-------------------------------------------------------------

let myArr = ["Pam", "Jim", "Dwight", "Michael"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

//-------------------------------------------------------------

// break and countinue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        // console.log(`Detected 5`);
        break;
    }
    // console.log(`Value of i is ${index}`);
}

// -------------------------------------------------------------


// continue skips one time only it does not break looping
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}