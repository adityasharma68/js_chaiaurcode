const userEmail = [];

if (userEmail) {
  console.log("Got a user email");
} else {
  console.log("Don't have user email");
}

// Falsy Values,
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values,
// "0", 'false', " space ", [], {}, function(){}

if (userEmail.length === 0) {
  console.log("array is empty");
}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("object is empty");
}

// IMPORTANT THING*** for general knowledge
// IF WE CHEAK,
// false == 0 >> output is true
// false == ' ' >> output is true
// 0 == ' ' >> output is true

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++?

// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10; //output is 5
// val1 = null ?? 10; //output is 10
// val1 = undefined ?? 15; //output is 15
// val1 = null ?? 10 ?? 15; //output is 10
// val1 = null ?? undefined ?? 15; //output is 15
// val1 = null ?? undefined; //output is undefined
val1 = undefined ?? null; //output is null

console.log(val1);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Terniary operator(?)
// condition ? true: false

const iceTeaPrice = 80 

iceTeaPrice <= 50 ? console.log("more than 50") : console.log("less than 50"); // here I'm confuse..?




