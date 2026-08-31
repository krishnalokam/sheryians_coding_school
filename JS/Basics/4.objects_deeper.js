import { this_data } from "./this";
// "use strict";

// function abc() {
//   console.log(this);
// }

// abc();

// var obj = {
//   firstName: "Siva",
//   lastName: "Lokam",
//   age: 40,
//   sayHi: function () {
//     console.log("Hi");
//     console.log(this);
//   },
//   sayHello: () => {
//     console.log("Hello");
//     console.log(this);
//     alert("hello in sayHello");
//   },
// };

// obj.sayHi();
// obj.sayHello();

// alert("hello");

// Syntaxt Error
/*
let a = 10;
console.log(a);
cinst b = 20;
*/

//Reference error
// let a = 10;
// console.log(a); //10
// console.log(b); // Reference error, b is not defined

//Type error
// const a = 10;
// a = 20; // Type error, Assignement to constant variable

let a = { name: "Siva" };
console.log(a);

a = 10;
console.log(a);
