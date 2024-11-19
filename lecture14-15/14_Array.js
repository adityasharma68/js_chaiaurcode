//ARRAY

//Basic about bracket
// ()>> Parenthesis   , []>> Sqare brace or bracket    , {}>> carly braces or Braces

const myArr = [0, 1, 2, 3, 4, 5];
//console.log(myArr[5]);
 
// const Marvel = ["Iron Man","Thor","Capt. America","Hulk"]
//console.log(Marvel);

//another way to declare array

// const myArr2 = new Array(4, 6, 5, 9)
//console.log(myArr2);

//array method

// myArr.push(10) // it help add value in a string.
// myArr.pop() // it help remove the value from the String, there is not like we give the value and it remove from the string there is rule use it remove the last value from the String.
// console.log(myArr);

//myArr.unshift(5) // it also help to add the value in a String. but it denote the Value in the Starting.

// console.log(myArr);

// console.log(myArr.includes(10)); // it gives the output in false and true.

// const newArr = myArr.join() // it gives the output withour bracket. it help to bind the array and also convert into String.

// console.log(myArr);
// console.log(newArr);
// console.log(typeof(myArr));
// console.log(typeof(newArr));

//SLICE & SPLICE

console.log("A ", myArr);

const MnAr = myArr.slice(1, 3); //"slice" may not include the range.
console.log(MnAr);
console.log("B ", myArr);

const MnAr2 = myArr.splice(1, 3); // "Splice" include the range.
console.log(MnAr2);

console.log(myArr);
