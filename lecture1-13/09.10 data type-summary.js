//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
 
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n;

// console.log(bigNumber);

// Reference (Non primitive)

// Array, Objects, Functions;

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "Aditya",
  age: 20,
};

const myFunction = function () {
  console.log("Hello Adi");
};

// console.log(typeof myFunction);

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//NOTE:

// * Premitive Datatypes

//                   Type                                   typeof

// i)             Number                               number
// ii)            String                                   string
// iii)           Boolean                               boolean
// iv)           Bigint                                   bigint
// v)            Symbol                                symbol
// vi)           Null                                      object
// vii)          Undefined                           undefined

// * Non-Premitive OR Referance OR Object datatype

//                   Type                                   typeof

// i)               Object                                object
// ii)              Array                                  object
// iii)             Function                            function(object)

// This is my research and output if anythig is wrong please feel proud to reply me





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// 1Stack (Primitive), Heap (Non-Primitive)

let myMobileName = "Iphone 7"
let myAnotherMobileName = "Samsung 7562";
myAnotherMobileName = "Samsung S24 Ultra";

console.log(myMobileName);
console.log(myAnotherMobileName);

let userOne = {
  email: "adi@gmail.com",
  upi: "adi@ybl",
};

let userTwo = userOne;

// userTwo.email = "Adi@google.com";

console. log (userOne. email) ;
console. log (userTwo. email) ;
