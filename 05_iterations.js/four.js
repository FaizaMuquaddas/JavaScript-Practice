// FOR-IN LOOP

const myObject = {
    'Roleplay': 'Grand theift auto',
    'GunGame': 'Warzone',
    'SkillGame': 'Sekiro'
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // or
    // console.log(`${key} is ${myObject[key]}`);
}


// -----------------------

const programming = ["Java", "C", "JS", "cpp", "rb"]

for(const key in programming){
    console.log(programming[key]);
}


//Keys of array is always starts from 0 thats why objects were created to put any key to any entity we want