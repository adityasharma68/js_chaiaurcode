// const Heroes = ["Ironman", "Hulk", "Capt. America", "Thor", "Black Widow"];

// const values = Heroes.forEach((hero) => {
//   console.log(hero);
//   return hero;
// });

// console.log(values); //the output is varibale in array but after variable it gives the "undefined" and there is every thing but the output is also undefined.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//#filter operation is used to return the value

// METHOD1 THIS IS THE RIGHT WAY TO CODE
// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

//METHOD2 THIS IS NOT RIGHT WAY TO CODE USING FILTER OPERATION BCZ IT GIVES EMPTY ARRAY AS OUTPUT bcz we open here "Scope" and if we open scope we use return keyword and There is we use methode 3 instead of methode2.
// const newNUms = myNums.filter((num) => {
//   num > 4; 
// });
// console.log(newNUms);

//METHOD3 THIS method is right to use bcz there we use "return" keyword in "filter Operation".
// const newNUms = myNums.filter((num) => {
//   return num > 4; 
// });
// console.log(newNUms);

//HOW WE USE FOR_EACH LOOP INSTEAD OF FILTER OPERATION.
//this method is gud but there we use logic and it's a complexe and take more time to make.
// const newNums = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

//THIS IS THE EXAMPLE TEACH HOW WE CHEAK THE DATA USING FITER FROM THE ARRAY
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

//  userBooks = books.filter( (bk) => bk.publish >= 2002)

 userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'Non-Fiction' //.......? WHY?
 })

  console.log(userBooks);

