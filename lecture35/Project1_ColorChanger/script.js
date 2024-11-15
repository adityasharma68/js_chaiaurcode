const button = document.querySelectorAll("button");
const body = document.querySelector("body");

button.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (eventObj) {
    console.log(eventObj);
    console.log(eventObj.target);

    if (eventObj.target.id === "cadetblue") {
      body.style.backgroundColor = eventObj.target.id;
    }
    if (eventObj.target.id === "orange") {
      body.style.backgroundColor = eventObj.target.id;
    }
    if (eventObj.target.id === "grey") {
      body.style.backgroundColor = eventObj.target.id;
    }
    if (eventObj.target.id === "yellow") {
      body.style.backgroundColor = eventObj.target.id;
    }
    if (eventObj.target.id === "antiquewhite") {
      body.style.backgroundColor = eventObj.target.id;
    }
  });
});
