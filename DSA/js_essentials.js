let prompt = require("prompt-sync")();
// console.log(temp);
// var temp = 10;
// temp = 100;
// console.log(temp);

// sum of string + string is string (concatenation)
// sum of int + string is string (concatenation)
// sum of string + in is string (concatenation)
// sum of int + int is number (arithmetic operation)

// let s1 = "hello";
// let s2 = " world";
// console.log(s1 + s2);

// let temp1 = 20;
// let s1 = "Siva";
// console.log(temp1 + s1);

// let s1 = "hi ";
// let temp1 = 10;
// console.log(s1 + temp1);

// let temp1 = 10;
// let temp2 = 20;
// console.log(temp1 + temp2);
// console.log("The sum of " + temp1 + " and " + temp2 + " is " + temp1 + temp2);
// console.log("The sum of " + temp1 + " and " + temp2 + " is " + (temp1 + temp2));
// console.log(temp1 + temp2 + " is the sum of " + temp1 + " and " + temp2);

// type coercion
// console.log("1" + 1); // 11
// console.log("1" - 1); //0
// console.log("1" / 1); //1
// console.log("1" % 1); //0

//
//npm install prompt-sync
// let age = prompt("Enter your age");
// console.log(typeof age);
// console.log(`Age is ${age}`);

/* Swap two variables via three methods */
// Method 1 : using temp variable
// a = 10;
// b = 20;
// console.log(a, b);

// temp = a;
// a = b;
// b = a;
// console.log(a, b);

// Method 2:
// a = 10;
// b = 20;

// console.log(a, b);
// a = a + b; // a = 30;
// b = a - b; // b = 10;
// a = a - b;
// console.log(a, b);

// Method 3;
a = 10;
b = 20;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);
