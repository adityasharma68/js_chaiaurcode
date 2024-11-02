// how to use "for of" loop

// ["", "", ""];
// [{}, {}, {}];

const arr = ["Ironman", "Hulk", "Capt. America", "Thor", "Black Widow"];

for (const num of arr) {
  //   console.log(`name of heroes ${num}`);
}

const greeting = "Hello Adi!";
for (const greet of greeting) {
  //   console.log(`Each char is ${greet}`);
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// HOW TO USE "Maps" in "for of" loop

const map = new Map();
map.set("IN", "India"); //the map object is hold key-value, when we use map with".set" we write in first braclet is key and second work as a value
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India"); // in the map there is unique value if we rewrite in the map and give double entry so it takes only one entry.

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

const myObject = {
  game1: "PUBG",
  game2: "COD",
};

// for (const [key, value] of myObject) { //if we write like it then it give error:>>"there is a error Myobject is not iterable"
//   console.log(key, ":-", value);
// }
