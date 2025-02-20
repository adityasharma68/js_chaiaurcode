//FOR EACH LOOP.

const coding = ["js", "ruby", "java", "python", "c", "html"];

coding.forEach(function (item) {
  //there we use "item" word for every element in array.
  // forEach is used to callback function.
  // console.log(item); //there we pass the value as "item" word.
});


//the basic callback function is:
// coding.forEach( (variableName) => {
//    console.log(variableName);
//} )

//here is the example of basic callback function.
coding.forEach((item) => {
  // console.log(item);
});

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe); // this line is used to referrence for a value.

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

const myData = [
  {
    Stud1: "Aitya",
    School: "DAV",
  },
  {
    Stud1: "Sweta",
    School: "ND",
  },
  {
    Stud1: "Taniska",
    School: "GSA",
  },
  {
    Stud1: "Abhishek",
    School: "Vishwamitra",
  },
  {
    Stud1: "Deepanshu",
    School: "SOP",
  },
];

myData.forEach((item) => {
  console.log(item.Stud1, ":>", item.School);
});
