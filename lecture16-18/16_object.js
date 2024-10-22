// Singleton: when we make constructor using singleton then it singleton object it means it make a single and unique object. {imp* if make declared using literal so Singleton not be created}
Object.createuser;

//Object Literals

const myKey = Symbol("AdiKey");

const JsUser = {
  "full name": "Aditya Sharma",
  [myKey]: "FirstKey", // in the line if we not use sqare bracker'[]' so it's act like a String key but if use the '[]' then it act like the Symbol Key.
  name: "Aditya",
  age: 21,
  location: "Gangoh",
  email: "adi@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday", "Saturday"],
};

//this is method is not a good practice
// console.log(JsUser.age);
// console.log(JsUser.email);

//this is the good practice for code.
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[myKey]);

JsUser.email = "adi.apk@gmail.com"; // this line is used to modificatin in the string.
// console.log(JsUser);

// Object.freeze(JsUser) //if we use ".freez" it preventing the modification code after we use the ".freez" property

//now we adding the funtion in the js.

JsUser.greet = function () {
  console.log("Hello Js");
};

JsUser.greet2 = function () {
  console.log(`Hello My Friend, ${this.name}`);
};

console.log(JsUser.greet());
console.log(JsUser.greet2());
