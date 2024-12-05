// NESTED SCOPE

// in nexted scope we call the outer scope by inner class but call inner class by outer class bcz the data run under scope.

function one() {
  const username = "Aditya";

  function two() {
    const website = "Youtube";
    // console.log(username);
  }
  //   console.log(website); //the output is

  two(); // there is a intresting fact, if we are not call inner function then it not gives the output.
} 
one();

//another example og if else,

if (true) {
  const username = "Aditya";

  if (username === "Aditya") {
    const website = " Insta"; // ques. why use space before the word why not after in the username line....?
    // console.log(username + website);
  }
  // console.log(website); //it also gives error bcz the "website" declared in the inner class.
}
// console.log(username); //it also gives error bcz the "username" declared in the inner class.

// +++++++++++++++++++++++ intresting concept +++++++++++++++++++++

//this is know as basic function.

console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

//this is know as experation, it also like as variable bcz it hold json value funtion.

addTwo(5); // and if we execute the value so the output in the funtion is "Cannot access 'addTwo' before initialization" bcz there is declared the funtion and also hold in the variable.

const addTwo = function (num) {
  return num + 2;
};
