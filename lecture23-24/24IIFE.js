// Immediately Invoked Function Expression (IIFE)

(function chai() {
  console.log(`DataBase Connected`);
})();

//"()","()" >> the first paranthesis is used to where we write the defination of function, and the second paranthesis is used for execution

// **Ques: Why we used IIFE expression..?
// **Ans:this help to immediately excecution but, this is not a good answer for interview point.
// **Another good answer:it is used bcz it problem in global scope pollution. it help to remove the global pollution of variable, declaration.

((name) => {
  //here we define the name variable
  console.log(`DB connected ${name}`); //here we used variable in code
})("Aditya"); //in this line we pass the "name" variable  // in this code there is error in the hitesh code mine is run....? Ans: bcz there is no line terminater in the code.(Line5).
