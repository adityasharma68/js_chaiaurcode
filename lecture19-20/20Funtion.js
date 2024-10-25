//when we don't know many argument will be add so, how to  make a parameter.

function CalculateCartPrice(...num1) {
  // "..." it is rest operater but we know it also know as "SPREAD OPERATOR", so it can depend on usecase where we use. there we use the rest operater so it is use for, when passing the many value int the funtion'like in cart we add many item',  it work on all the passing value in the array.
  return num1;
}

// console.log(CalculateCartPrice(200, 410, 596));

const user = {
  username: "Aditya",
  ID: 123,
};

function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and ID is ${anyobject.ID}`);
}

// handleObject(user)

// when we override the data
handleObject({
  username: "adi",
  ID: 902,
});

const Myarray = [12, 5, 6, 8, 9, 4, 15];

//when we call the value using aaray.
function returnsecondvalue(getArray) {
  return getArray[3];
}

// console.log(returnsecondvalue(Myarray));
console.log(returnsecondvalue([12, 15, 6, 5, 94, 6]));
