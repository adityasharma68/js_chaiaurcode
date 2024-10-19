// DATES

//let myDate = new Date();
//console.log(myDate); // it gives the in object whic we can't understand the output here.

//console.log(myDate.toString()); // is gives better output in string 'Fri Oct 18 2024 19:07:53 GMT+0530 (India Standard Time)'

//console.log(myDate.toDateString()); // its gives the simple date without the times.
//console.log(myDate.toISOString()); // don't know ....?
//console.log(myDate.toJSON()); // don't know ....?
//console.log(myDate.toLocaleDateString()); // it gives the simple date using "/" >>"18/10/2024"
//console.log(myDate.toLocaleString()); // it gives the simple date using "/" and also gives readable time which is comfort to read "18/10/2024, 7:10:26 pm"


//console.log(typeof(myDate)); // the type of date is an object, quest for interview.

// let myownDate = new Date(2023, 0, 24)
//let myownDate = new Date(2023, 0, 24, 5, 43) // here we give the info in the given order>> "Year/month/date/houraInTime/MinutesInTime"

// console.log(myownDate.toLocaleString()); 

let myownDate = new Date("2024-10-02") // here we create my own date.
// console.log(myownDate.toString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myownDate.getTime()); // in those value has a difference what is it...?

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getDate());


newDate.toLocaleDateString('default',{  
    day:"2-digit"
})  // this is string use and cheak is how to use this value in stirng late....



