const name = "Aditya";
const project = 5;

// console.log(`My name is ${name} and the project made by me ${project}`);

//another way to make a string and this method is good way in coding
 
const MyDevice = new String("iPhone-16-pro-max");

// console.log(MyDevice[5]);  // to cheak the in which string has a number.

// console.log(MyDevice.__proto__); //it is use for cheak the prototype the outpus is"{}"

// console.log(MyDevice.length); // its use for cheak the length of string

// console.log(MyDevice.toUpperCase()); //Don't know why we use this...?

// console.log(MyDevice.charAt(4)); // to cheak the no of string which alphabet in which number

// console.log(MyDevice.indexOf('P')); //it is use for cheak the variable in which number

const newString = MyDevice.substring(0, 5); //it is use for substring where we print the no, which in depend on how many number are in denote in substring and we give the start no and the last no. And the last no of string is not be consider.
// console.log(newString);

const anotherstring = MyDevice.slice(-4, 9); // confusion how is it work...?
// console.log(anotherstring);

const newString1 = "   Aditya   ";
// console.log(newString1);
// console.log(newString1.trim()); // trim help remove starting and ending space from the code.

const url = "http://adipc.com/myPC/Aditya Sharma";
console.log(url);

console.log(url.replace(' ', '-')); // ".replce" is use for when we changre in string or a replace any specific word then we use ".replace"

console.log(url.includes('adi')); //".include" is use for when find a word in string, when we write in include then it scan the string and if it find the word then its indicate true either it false.
console.log(url.includes('Adi')); //it show false bcz ther is A is captital.



console.log(MyDevice.split('-')); //".split" is use split the stirng on the basis of 'which word use in colen' .


