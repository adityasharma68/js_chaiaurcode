// fetch('https://somthing.com').then().catch().finally()

// Ques: What is the Promise..?
// Ans: The Promise is object represents the final success (or failure), of an asynchronous operation and its resulting value.

//   A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//THIS IS THE PROCESS OF HOW TO CREATE THE PROMICES IN THE JAVASCRIPT

//PROMISE 01;

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task:
  // DB calls, cryptography, network

  setTimeout(function () {
    // console.log("Async task is complete");
    resolve(); //here we write the resolve() paremeter to connect with the {.then}
  }, 1000);
});

promiseOne.then(function () {
  // here .then() is directly connected to the resolve.
  // console.log("Promise consumed");
});

//PROMISE 02;

new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  // console.log("Async 2 resolved");
});

//PROMISE 03;

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      // here resolve are also used for the pass the value from the object to function.
      userName: "Aditya",
      email: "adi@123.com",
    });
  }, 1000);
});

PromiseThree.then(function (user3) {
  // console.log(user3);
});

//PROMISE 04;

const PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        userName: "Aditya04",
        Password: "@231",
      });
    } else {
      reject("Error001: Somthing went Wrong");
    }
  }, 1000);
});

// const userName = PromiseFour.then((user4) => { // this is the wrong way to code, So try another method.
//   console.log(user4);
//   return user4.userName;
// });

const username = PromiseFour.then((user4) => {
  //   console.log(user4);
  return user4.userName;
})
  .then((user4) => {
    // console.log(user4);
  })
  .catch(function (error) {
    // here .catch() is directly connected to the reject method.
    // console.log(error);
  })
//   .finally(() => console.log("The Promise is resolved either Rejected"));

//PROMISE 05;

const PromiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        username: "Tony05",
        password: "tony@231",
      });
    } else {
      //   reject("ERROR: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  //   const response = await PromiseFive; //THIS IS METHOD IS GOOD TO WRITE BUT THIS CODE NOT WORKING ON FALSE STATEMENT
  //   console.log(response);

  try {
    const response = await PromiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// Another example of async object.

//METHOD 1: {try().catch()}

// async function getAllUser() {
//   try {
//     const response = await fetch("https://api.github.com/users/adityasharma68");
//     // console.log(response);
//     const data = await response.json();
//     // console.log(data);
//     console.log(data.name);
//   } catch (error) {
//     console.log("E: 101", error);
//   }
// }

// getAllUser();


//METHOD 2: using fetch

fetch('https://api.github.com/users/adityasharma68')
.then((response) => {
    return response.json()
})
.then((response_data) => {
    console.log(response_data);
})
.catch((error) => {
    console.log(error);
})

