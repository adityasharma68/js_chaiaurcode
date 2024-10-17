const value = 100;
//console.log(value);
//console.log(typeof(value));

const num_value = new Number(69.1234); //Why we use "new" in this line...? & if i remove "new" then the number object not working. this is use for making a number object

//console.log(num_value);
// console.log(typeof(num_value));

//console.log(num_value.toString().length); // ".length" is use to cheak the length of String and ">toString" is used to convert into the string.
// console.log(typeof(num_value));

//console.log(num_value.toFixed(2)); // "to fixed is used how many no show after the decimal like we dived 10/3 So, the answer is 3.333333...  but is show only 2 digit after the decimal like 3.33"

//console.log(num_value.toPrecision(1)); // it is also use like a "tofixed" prototype but ther is minor change if the value is greater then the value we give then it show the output in exponential or alse the value is before the decimal it can also gives the output in exponential.

// now we use the coma's like when we write a number in form of rupee so there is coma use for define the value is in thousand, Lakh, crore etc. Example: 1,00,000, 10,000 and etc

const hundreds = 1000000;
//console.log(hundreds.toLocaleString()); // this is the methode we use to use coma's in Number use as in currency.

//console.log(hundreds.toLocaleString('en-IN')); // it use for indian currency type "en-IN"

//+++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // it is used to convert the negative value to the positive value.
console.log(Math.round(3.6)); // ".round" is use to round of the value and default set is if value<.5 so is take
