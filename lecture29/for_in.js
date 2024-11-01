//HOW TO USE THE 'FORIN' USE FOR "OBJECT" IN 'FOR LOOP'
const myobject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myobject) {
  //   console.log(`${key} : ${myobject[key]}`);
}

const programming = ["js", "cpp", "py", "c", "java"];

for (const key in programming) {
  // console.log(programming[key]);
}




//this method is also not iteratle in for in loop.
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India");

for (const key in map) {
  // console.log(key);
}


