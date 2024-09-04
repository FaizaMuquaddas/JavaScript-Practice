const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and current value: ${currval}`);
    
//     return acc + currval
// }, 0)


const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JS course",
        price: 499
    },
    {
        itemName: "Java course",
        price: 5999
    },
    {
        itemName: "Python course",
        price: 899
    },
    {
        itemName: "Full stack course",
        price: 1299
    }
]

const bill = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(bill);
