//FOR EACH LOOP.

const coding = ["js", "ruby", "java", "python", "c", "html"];

coding.forEach(function (item) {
  // forEach is used to callback function.
  //   console.log(item);
});

//the basic callback function is:
// coding.forEach( (variableName) => {
//    console.log(variableName);
//} )

coding.forEach((item) => {
  //   console.log(item);
});

function printMe(item) {
  //   console.log(item);
}

coding.forEach(printMe); // this line is used to referrence for a value.

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
