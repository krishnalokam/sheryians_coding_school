// var a = 10;
// var b = 20;

// function add() {
//   var c = a + b;
//   console.log(c);
// }

// add();

// console.log(a);
// var a = 10;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 
*/

// console.log(a); // cant access a before initialization
// console.log(b);
// var a = 10;

// let b = 20;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Stack overflow
 
*/
// var i = 10;
// function loop() {
//   console.log(i++);
//   loop();
// }
// loop();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
let, const  - block scope
var - block scope
 
*/
// function greet() {
//   if (10 > 5) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log("Inside Hi, a:", a);
//     console.log("Inside Hi, b:", b);
//     console.log("Inside Hi, c:", c);
//   }

//   console.log("Outside Hi, a:", a);
//   console.log("Outside Hi, b:", b);
//   console.log("Outside Hi, c:", c);
// }
// greet();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
GEC
 
*/

// var a = 10;
// let b = 20;

// function hero() {
//   var a = 100;
//   let b = 200;
//   console.log(a);
//   console.log(b);
// }
// hero();
// console.log(a);
// console.log(b);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
var vs let
 
*/

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000); // All printing 3,3,3
// }
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000); // Output is 0,1,2
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Lexical Environment
 
*/

// function outer() {
//   var user = "Ram";

//   function inner() {
//     console.log("username is:", user);
//   }
//   return inner;
// }

// var outsider = outer();

// console.log(outsider);

// outsider();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 
*/

function parent() {
  var username = "Siva";

  function child() {
    var childname = "Alexa";
    console.log("username ", username);
    console.log("childname ", childname);
  }

  return child;
}

var parentout = parent();

parentout();
