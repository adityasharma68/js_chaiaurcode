//#HOW TO USE THE 'FORIN' USE FOR "OBJECT" IN 'FOR LOOP'


//#there we use the for_in loop for object, bcz for_of doesn't work on obect.
const myobject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myobject) {
  //   console.log(`${key} : ${myobject[key]}`);
}



//#there we use for_in loop for array.
const programming = ["js", "cpp", "py", "c", "java"];

//METHOD 1 IT NOT WORK PROPERLY BCZ IT GIVES ONLY KEYS OF ARRAY
for (const key in programming) {
  // console.log(key);  //output is :- 1,2,3,4,5,6
}

//METHOD 2 IT WORK PROPERLY
for (const key in programming) {
  // console.log(programming[key]);  //output is :- js cpp py c java
}


//#There we use for_in loop in "map".

//this method is also not iteratle in for_in loop.
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India");

for (const key in map) {
  // console.log(key);   //output is nothing, bcz it also iterable.
}


