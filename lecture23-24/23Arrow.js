const user = {
  username: "Aditya",
  Age: 21,

  welcomeMessage: function () {
    // here we make the welcome messge when user logged in the website.
    // console.log(`${this.username}, welcome to website`); //the meaning of "this keyword" is refer to the current context from 'one scope'i.e>user and here we refer "username" from the current context.
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Adi"; //here we change the context value. so, it takes the current context value is Adi.
// user.Age = 18;
// user.welcomeMessage();

// console.log(this); //when we write this after the code, from this line we're in the node environment and it refer the empty object, then it gives the output empty"{}"

//*IMPORTANT:>> the most global object in the browser on runtime is WINDOW{}.

// function chai() {
//   let username = "Aditya";
//   console.log(this.username); //if we refer the context using "this" keyword then it gives "undefined"  bcz it gives the output in object not working in function.
// }

// const chai = function () { // it also gives the undefined output bcz of this also not working.
//   let username = "Aditya";
//   console.log(this.username);
// };

const chai = () => {
  // when we user these "=>", then here we use arrow function and it gives the empty paranthesis output>"{}".

  let username = "Aditya";
  //   console.log(this);
};

chai();

//now we're discuss about pure arrow function "=>"

// basic syntax: () => {}

// const addTwo = (num1, num2) => { //this is known as basic arrow funtion. and also call explicit return bcz here we use explictily return.
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2; //this is known as implicit return. here we are not written return keyword for output.

//**IMPORTANT: if we use "{}" then using return keyword and if we use "()" then not need to write the return keyword. this technique mostly used in the react js.

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => "Aditya Sharma"; //here we use the object return. thts why we use paranthesis. bcz if we use the curely paranthesis"{}" then it gives the output of object is undefined.
console.log(addTwo(9, 7));

//here we use arrow function in array. 
// myArray = [2, 6, 4, 5, 9, 1];
// myArray.forEach( () => {
// }); on this topic we're discuss later on another video in deep.🫠
