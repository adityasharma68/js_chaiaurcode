// for loop
// BASIC SYNTAX
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is the best number");
  }
  //   console.log(element);
}

for (let i = 0; i <= 10; i++) {
  //   console.log(`Outer loop value ${i}`);

  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    // console.log(i + "*" + j + " = " + i * j);
  }
}

// for (i = 1; i <= 10; i++) {
//   console.log(`Aditya ${i}`);
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//USE OF ARRAY IN FOR LOOP,

let myArray = ["Ironman", "Hulk", "Capt. America", "Thor", "Black Widow"];
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //   console.log(element);
}

//break and continue

// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log(`detected 5`);
//     break; //Here we use use break for stop the condition bcz 5 detected.
//   }
//   console.log(`value of i is ${i}`);
// }



for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`detected 5`);
    continue; //Here we use use continue for skip the one condition bcz if there is one condition detect then it take then value and then loop run after the detect.
  }
  console.log(`value of i is ${i}`);
}
