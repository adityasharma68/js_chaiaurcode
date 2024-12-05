// let a = 10
// const b =20
// var c = 30

// "{}" we know that these bracket are use to make object declaration. when we use these "{}" brackets with funtion, if else and etc then it call 'Scope'

var c = 100; // this not working bcz var takes the inner value first.

 
if (true) {
  let a = 10; // it gives error, bcz it run under only Scope.
  const b = 20; // same as here, it also gives error, bcz it run under only Scope.
  var c = 30; // but "var" gives output=30, thts why we are not use these code in js bcz of it not a good practice.
}

console.log(a);
console.log(b);
console.log(c);
