const pc_games = ["Minecraft", "EFT", "COD", "GrandTheiftAuto"]
const mobile_games = ["Pubg", "miniMilitia", "FreeFire", "CandyCrush"]

// const array = pc_games.push(mobile_games) // will give output 5 because it is treating our 2nd array as a single data
// pc_games.push(mobile_games)
// console.log(pc_games); // array inside array; i.e, treating second array as a single data

// const games = pc_games.concat(mobile_games); //CONCAT returns new aray whereas PUSH modifies our exsiting array
// console.log(games);

// const all_device_games = [...pc_games, ...mobile_games] //SPREAD approach this is better to use because if you want to merge one more array you can simply ...newgames and as easy asn add that will combine in the new array as well
// console.log(all_device_games);

const arrays_in_arrays = [1, 2, 3, [4,5,6], 7,[8,9]]
const real_array = arrays_in_arrays.flat(Infinity) //using Infinity is an easy hack but giving depth is much better to do so, in flat() we pass the the number according to our need to solve the depth 
console.log(real_array);

console.log(Array.isArray("BEESLEY"));
console.log(Array.from("BEESLEY"));
console.log(Array.from({name: "Beesley"})); //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// continue study more on array methods, OF, FROM, ISARRAY