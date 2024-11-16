const form = document.querySelector("form");

//this course will give you empty value
//  const height = parseInt(document.querySelector('#height').value)
//  const weight = parseInt(document.querySelector("#weight").value);

form.addEventListener("submit", function (eventObj) {
  eventObj.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#bmiResult");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a Valid Height ${height}`;
  } else if (height === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a Valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //Show the result
    result.innerHTML = `<span>${bmi}</span>`;

    if (bmi <= 18.6) {
      result.innerHTML = `<p style="color: blue;">The BMI is Under Weight<\p> ${bmi}`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `<p style="color: green;">The BMI is Normal Range<\p> ${bmi}`;
    } else if (bmi > 24.9) {
      result.innerHTML = `<p style="color: red;">The BMI is Overweight<\p> ${bmi}`;
    }
  }
});




// extra stuff

// he BMI is Normal Range
// he BMI is Overweight

// Determine BMI category
//   let category = "";
//   let color = "";
//   if (bmi < 18.6) {
//     category = "Underweight";
//     color = "blue";
//   } else if (bmi >= 18.6 && bmi <= 24.9) {
//     category = "Normal";
//     color = "green";
//   } else {
//     category = "Overweight";
//     color = "red";
//   }

//   // Display result
//   result.innerHTML = `
//     <span style="color: ${color}; font-weight: bold;">
//       Your BMI is ${bmi} (${category}).
//     </span>
//   `;
// }
