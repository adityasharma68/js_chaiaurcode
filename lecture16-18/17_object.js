// const SocialUser = new Object() //This is Singleton object.

const SocialUser = {}; //This is non-Singleton object.

SocialUser.id = "Adi@123";
SocialUser.name = "Aditya";
SocialUser.isLoggedIn = false;

// console.log(SocialUser);

const RegularUser = {
  email: "adi@gmail.com",
  fullName: {
    userfullname: {
      firstname: "Aditya",
      lastname: "Sharma",
    },
  },
};

// console.log(RegularUser.fullName.userfullname.firstname);

const Obj1 = { 1: "a", 2: "b" };
const Obj2 = { 3: "c", 4: "d" };
// const obj3 = {Obj1, Obj2}

// const Obj3 = Object.assign({}, Obj1, Obj2); //"{}" parantasis write in the code and it is optional parameter but if we write in the code it is good way to code so, always try to write in the code.

// console.log(Obj3 === Obj1); // in mdn it gives the output true if i run this code do it give false ......????**IMPORTANT
// console.log(Obj3 === Obj2);

const Obj3 = {...Obj1, ...Obj2}
// console.log(Obj3);

const user = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "a@gmail.com"
    }
    
]


user[1].email // why we write like this...?

// console.log(SocialUser);

console.log(Object.keys(SocialUser)); // it help to write every keys in the array.
console.log(Object.values(SocialUser)); // it help to write every values in the array.
console.log(Object.entries(SocialUser));

console.log(SocialUser.hasOwnProperty('name')); // it help to cheak the property exist in the array if it exist so give the output in boolean 'True' but if not so give 'false'.
console.log(SocialUser.hasOwnProperty('isLoggedoff')); //it gives the output "false"

