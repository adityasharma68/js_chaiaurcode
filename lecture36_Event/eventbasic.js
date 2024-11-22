// document.getElementById('bird').onclick = function(){
//     alert("A bird image")
// } //this is not a modern type of code bcz there are some feature are not available in this code.

//attachEventListener method, it uses in early time mainly used in internet explorer.
// jQuery - onEventListener {on}

//IMPORTANT NOTES FOR STUDY AND INTERVIEW POINT:

//type{mouse event, keyboard event}, timeStamp{how to change the date activitylike events}, defaultPrevented{is help to change the deafult behaviour}
//target, toElement, srcElement(impTopic), currentTarget

//  THESE TOPICS ARE INTERVIEW PROSPECTIVE
//clientX, clientY, screenX, screenY
//altkey, ctrlkey, shiftkey, keyCode

// Event propogation this is also known as {bubling}

// if we use "false" then it take the inner id first, and then it take the outer id.
// if we use "true" then it take the outer id first, and then it take the inner id.
// document.getElementById('image').addEventListener('click', function(e){
//     console.log("clicked inside the ul"); // EventListener is the most intresting feature to used for listen the many events in the one time like., drag and drop, keyboard event, mouse event and many more.
// }, false)

// document.getElementById('coffee').addEventListener('click', function (e) {
//   console.log("Coffee Time");
//   e.stopPropagation(); // it help to invoke"Stop" this method prevents event from reaching any objects other than the current object.{ye help krta hai bubling ko rokne k liye}
//  }, false);

// document.getElementById('snowMan').addEventListener('click', function(e){
//     e.preventDefault(); //If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.
//     e.stopPropagation();
//     console.log("Make a snowball");
// }, false)

document.querySelector("#image").addEventListener(
  "click",
  function (e) {
    // console.log(e.target); // {Returns the object to which event is dispatched (its target)} it help to target the data which is click by user and it give the every info. about the data like(id, class, cssProperty and etc).
    console.log(e.target.tagName); // it help to see the parent node like(parentID, parentClass), it give the parent node data.
    if (e.target.tagName === "IMG") {
      alert(`Remove the ${e.target.id}`); //here we add the remove functionality in the code with alert.
      let removeIt = e.target.parentNode;
      removeIt.remove();
    }

    else{
        alert("Don't remove the parent class");
    }

    // let removeIt = e.target.parentNode
    // removeIt.remove() //This method is help to add remove functionality. it help to remove the element from the parent node. and if click the any element of parentNode then it remove the element from the parentNode. In this type of method if we click on the list item the it remove everything bcz there is the parent element is parentNode
    // removeIt.parentNode.removeChild(removeIt) // this is the second method of remove the child element.
    //BOTH METHOD ARE GOOD, BUT SECOND ONE IS THE MODERN WAY TO CODE, AND THE FIRST METHOD ONE IS OLD.
  },
  false
);
