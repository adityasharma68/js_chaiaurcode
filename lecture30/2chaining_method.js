const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map( (num) => num+10) 
// console.log(newNums);

//CHAINING METHOD

const newNums = myNums
  .map((num) => num * 10) //when we use chaining method in "map", then the result of 'first opertion' pass the value in the 'second operation'. This is called chaing method.
  .map((num) => num + 1) //here is the interesting thing, there is the value in "num" not value from array, now there is the value are >> those value which is 'multiply by 10' using first ".map" operation and then those value taken by second operation ".map"
  .filter((num) => num >= 50);

console.log(newNums);
