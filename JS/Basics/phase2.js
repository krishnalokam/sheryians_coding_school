//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Topic 1: 
*/
// console.log("if ke pehle");

// if (10 > 5) {
//   console.log("If is running");
// }

// console.log("If ke baad");
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 
*/

// while (10 < 5) {
//   console.log("hello");
// }
// var num = Number(prompt("Enter Number"));
// var a = 0;
// while (a++ < num) {
//   if (a % 2 !== 0) {
//     console.log(a);
//   }
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Ask a user any number and print its table till to
 
*/

// var num = Number(prompt("Enter a Number"));
// for (i = 1; i <= 10; i++) {
//   console.log(i + " X " + num + " = " + i * num);
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
do while loop
 
*/
// let pass = "";
// do {
//   pass = prompt("Enter password");
// } while (pass != "123");
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
var let const
 
*/
// const a = 10;
// // console.log(window);
// console.log(a);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 
*/
// if (10 > 5) {
//   var a = 10;
//   console.log("inside ", a);
// }
// console.log("outside ", a);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 
*/

// var num = 10;
// var a = "siva";
// a = `siva ${num}`;
// // console.log(a + num);
// console.log(a);

// name = "siva";
// age = 40;
// gender = "male";
// output = `my name is ${name} and my age is ${age} and I am a ${gender}`;
// console.log(output);

// let a = 1;
// while (a <= 10) {
//   if (++a == 3) continue;
//   console.log(a);
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Functions

 
*/

// function abc() {
//   console.log("hello");
// }

// abc();

// function walk() {
//   console.log("walking");
// }

// function sing() {
//   console.log("singing");
// }

// function dance() {
//   console.log("dancing");
// }

// walk();
// dance();
// dance();
// sing();
/*
function greet(parameters) {
  console.log("hello " + parameters);
}

arguments = "Siva";
greet(arguments);

greet("Rama");

greet();
*/

/*
function add(a, b) {
  console.log(a + b);
}

add(10, 20);

function mul(a, b) {
  {
    console.log(a * b);
  }
}

mul(14, 6);
*/

// function greet(name, age) {
//   console.log("Good morning ", name);
//   if (age >= 18) {
//     console.log("You are welcome in party!");
//   } else {
//     console.log("Not Allowed");
//   }
// }

// greet("Ramesh", 17);

/* 
function a1(name) {
  console.log("hello guys" + name);
}

var b1 = function (name) {
  console.log("hello guys2" + name);
};

var c1 = (name) => {
  console.log("hello guys3" + name);
};

var c2 = (name) => console.log("hello guys4 " + name);

var c3 = (name) => console.log("hello guys5 " + name);

a1("aman");
b1("harsh");
c1("sofia");
c2("Jahnvi");
c3("Sarthak");

*/
// aaa();
// bbb();
// ccc();
// function aaa() {
//   console.log("inside aaa");
// }

// var bbb = function () {
//   console.log("inside bbb");
// };

// var ccc = () => console.log("inside ccc");

// (function () {
//   console.log("This is IIFE");
// })();

// (() => console.log("This is IIFE using arrow function"))();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Function Return
*/
// function aaa() {
//   console.log("Hello");
//   return 100;
// }

// console.log(aaa());

// // function add(a, b) {
// //   return a + b;
// // }
// console.log(add(18, 27));

// function permission(gender) {
//   if (gender == "M") {
//     return "Welcome to Men's Party!";
//   } else {
//     return "Welcome to Women's Party!";
//   }
// }

// console.log(permission("M"));
// console.log(permission("F"));

// function add(a, b) {
//   return 10;
//   //below code doesnot exist
//   var c = a + b;
//   return c;
// }

// console.log(add(10, 20));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Function return types
 
*/
// function a() {
//   return 10;
// }

// var b = function () {
//   return 20;
// };

// var c = () => {
//   return 30;
// };

// var d = () => {
//   return 40;
// };
// console.log(a());
// console.log(b());
// console.log(c());
// console.log(d()); // for one liner functions, if passing return curly braces are mandatory
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Pure Functions 
Impure Functions
 
*/
//pure function
// function square(a) {
//   return a * a;
// }

// console.log(10);
// b = 20;
// //impure function
// function increment() {
//   b++;
//   return b;
// }

// console.log(increment());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Extra arguments will be ignored 
Extra parameters will take undefined value
 
*/

// function display(a, b) {
//   console.log("values of a and b", a, b);
// }

// display(10, 20); //values of a and b 10 20
// display(10, 20, 30); //values of a and b 10 20

// function display2(a, b, c) {
//   console.log("Values of a, b, and c ", a, b, c);
// }
// display2(10, 20); //Values of a, b, and c  10 20 undefined

// function displayAll(...arr) {
//   console.log(arr);
// }

// displayAll(1, 2, 3, 4, 5, 6, 7, 8, 9); //(9)[(1, 2, 3, 4, 5, 6, 7, 8, 9)];

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Function default paramerts
 
*/

// function greet(user = "Sir", age = 20) {
//   console.log("Welcome " + user + ", Your age is " + age);
// }

// greet("Suman"); //Welcome Suman, Your age is 20

// greet("Sumit"); //Welcome Sumit, Your age is 20

// greet(); //Welcome Sir, Your age is 20

// greet(undefined, 30); //Welcome Sir, Your age is 30

// greet("Ramesh", 35); //Welcome Ramesh, Your age is 35
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Passing function as argument
 
*/

// function hero() {
//   console.log("I am hero");
// }

// function main(callback) {
//   console.log("This is main function");
//   callback();
// }

// main(hero);

// function footpath(fwidth) {
//   console.log("I am footpath of width ", fwidth);
// }

// function mainRoad(width, cb) {
//   console.log("I am Main road of width ", width);
//   cb(width / 10);
// }

// mainRoad(80, footpath);

// setInterval(function () {
//   console.log("I am Siva Lokam");
// }, 1000);

// function parent() {
//   console.log("I am daddy");

//   function child() {
//     console.log("I am baby");
//   }
//   return child;
// }

// var result = parent();
// result();

function dada() {
  console.log("I am dada");

  function papa() {
    console.log("I am papa");
    function child() {
      console.log("I am child");
    }
    return child;
  }
  return papa;
}

dada()()();
//I am dada
//I am papa
//I am child
