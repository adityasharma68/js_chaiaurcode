const MCU_heroes = ["Thor", "Ironman", "Hulk"];

const DC_heroes = ["Batman", "Superman", "Flash"];

// MCU_heroes.push(DC_heroes) // it help to push the elment of one array to another array.

// console.log(MCU_heroes);
// console.log(MCU_heroes[3][2]);
 
// const allHero = MCU_heroes.concat(DC_heroes) //".concat" is used to merge the element of two array properly.

// console.log(allHero);

const AllnHero = [...DC_heroes, ...MCU_heroes]; // this syntax is also use for merge the element of two array in the anothe one array.

// console.log(AllnHero);

const anotherarray = [2, 4, 6, [1, 3, 5, [7, 9]], 8];
const AnotherArray = anotherarray.flat(Infinity);

// console.log(AnotherArray);

console.log(Array.isArray("Aditya")); // it help to know is it array or not.
console.log(Array.from("Aditya")); // it help to change the anything into array.

console.log(Array.from({ name: "Aditya" })); // intresting bcz it usely for interview ques.

let Score1 = 100;
let Score2 = 200;
let Score3 = 300;

console.log(Array.of(Score1, Score2, Score3)); // it also for print the multiple array in a one array.
