const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num + 10 )

// method of chaining
const newNumbs = myNumbers
                .map( (num) => num * 10)   //result 1
                .map( (num) => num + 1)    //chaining: result1 + result2
                .filter( (num) => num >= 40)

console.log(newNumbs);

