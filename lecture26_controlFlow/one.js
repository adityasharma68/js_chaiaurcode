//if Statement

// const isUserLoggedIn = true;

// if (2 == "2") {
//   // if condition is true then it execute the code. but it false then it didn't execute.
//   console.log("True");
// }

// < lessthan
// > greaterthan
// <= lessthan equal to
// >= greaterthan equal to
// == cheak the value is greater or not. in this condtion it cheak the value and give the value i.e> 2=="2" and it gives true but if we cheak the type then it not equal then we try this condition "==="
// != cheak the statement ir right pr wrong.
// === it cheak the type also., in this condition if we use i.e> 2=="2" then it gives flase bcz there is cheak the variable type also then there is not equal.

// const temperature = 50;

// if (temperature === 50) {
//   console.log("Less than 50");
// } else {
//   console.log("Temperature is greater than 50");
// }

// console.log("Execute must");
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//here  we cleared if we use the let keyword then the scope is fixed in the statement but if we use the var keyword then it act like a global.

// const score = 100
// if(score > 50){
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//short hand notation,

// const balance = 1000

// if(balance > 1000) console.log("test 1"), console.log("test 2"); // this not a good practice bcz it immature code, unreadable code, and don't use in the company.

// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 950){
//     console.log("less than 950");
// } else{
//     console.log("less than 1200");
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const UserLoggedIn = true;
const debitCard = false;
const loggedInFromGoogle = false;
const loggedInFromEmail = false;

if (UserLoggedIn && debitCard) {
  // "&&">'AND statement', it help to cheak both condition is true if any one is false then it not execute but both are true then it gives the output. it like>"MERE KO TO SAB CHAIYE CHAI BI OR COFFEE BI AGR KUCH NAHI MILA TO M EXECUTE NAHI KARUGA🫡😶"
  console.log("Allow to buy");
} else {
  console.log("NOT Allow to buy");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  // "||"'OR statement, this use for multiple condition and there is benefit is if user follow only one condition it also true but if not both means both are false then it not execute the code it call for like or condtion like>"YEH NAHI TO YEH SAHI🫡😄"
  console.log("user logged in");
} else {
  console.log("user not logged in");
}
