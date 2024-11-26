//how to create a function in js

function Repeatmyname() {
  console.log("A");
  console.log("D");
  console.log("I");
  console.log("T");
  console.log("Y");
  console.log("A");
} 

// Repeatmyname() // it help to execution, we call it reffrence.

//1st methode to make the funtion
// function addTwoNo(number1, number2) { //in this line "number1, number2" is a parameter.
//   console.log(number1 + number2);
// }

//another method to make a funtion this gud way to make a code. this method help stored the value in the variable
//2nd methode to make the funtion
function addTwoNo(number1, number2) {
  //   let result = number1 + number2;
  //   console.log("no out of 10");
  //   return result;

  // if write code like this
  return number1 + number2;
  // this is alse a right way bcz it save our space
}

const result = addTwoNo(3, "5"); // in this line something written in "()" brackets we call it arguments

// console.log("Result: ", result);

//3rd methode to make the funtion

function loginUser(username) {
  if (username == undefined) {
    console.log("Please enter a username");
    return; //when we use return keyword so after the keyword, when we write anything it not implement to code and not give the output.
  }
  return `${username} just logged in`;
}

// console.log(loginUser("Aditya"));

console.log(loginUser()); //IMo quest for interviw if we not pass the value so the output is "undefined" it is important

// when professional write the code. in this type of code we use the exlametri"!" symbol(it is not symble), it help to covert the true value into false and vise-versa.
function loginUser(username = "Adi") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUser("Aditya"));
