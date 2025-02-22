const myNums = [1, 2, 3];

// METHODE1 This is the good way to code and also readabilty code.
// const myTotal = myNums.reduce(function (acc, curval) {
//   console.log(`acc: ${acc} and curval: ${curval}`);
//   return acc + curval;
// }, 0); 


//METHOD2 This is short or good method.
// const myTotal = myNums.reduce((acc, curval) => acc + curval, 3);

// console.log(myTotal);

const ShoppingCart = [
  {
    itemName: "IPhone 12 Pro",
    price: 112000,
  },
  {
    itemName: "IPhone 13",
    price: 35000,
  },
  {
    itemName: "Samsung S22",
    price: 42000,
  },
  {
    itemName: "IPhone 16",
    price: 52000,
  },
  {
    itemName: "Samsung S24 Ultra",
    price: 132000,
  },
];

const pricetoPay = ShoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(pricetoPay);
