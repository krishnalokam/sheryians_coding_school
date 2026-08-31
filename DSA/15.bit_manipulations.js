//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
convert decimal number to binary
 
*/
// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter the Number"));
// let ans = "";
// while (n > 0) {
//   let digit = n % 2;
//   ans = digit + ans;
//   n = Math.floor(n / 2);
// }

// console.log(ans);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
q2 convert binary to decimal
 
*/
// let bin = 111;
// let ans = 0;
// let count = 0;
// while (bin > 0) {
//   let digit = bin % 10;
//   ans += digit * Math.pow(2, count++);
//   bin = Math.floor(bin / 10);
// }
// console.log(ans);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 
*/
// console.log(9 & 5);
// console.log(9 | 5);
// console.log(9 ^ 5);

// function sample(n) {
//   let i = 0;
//   let s = 0;

//   while (n > 0) {
//     let r = n % 10;
//     let p = Math.pow(8, i);
//     s = s + p * r;
//     i = i + 1;
//     n = Math.floor(n / 10);
//     console.log(s);
//   }

//   return s;
// }

// console.log(sample(127));

// let arr = [2, 3, 3, 4];

// arr[2] = 6 + 7 + arr[3];
// console.log(1 + 7 + arr[0]);
// console.log(7 ^ arr[1]);
// if (1 + 7 + arr[0] < (7 ^ arr[1])) {
//   arr[1] = arr[3] + arr[0];
//   console.log("one");
// } else {
//   arr[3] = arr[2] + arr[1] + arr[1];
//   console.log("two");
// }
// console.log(arr);

// if (arr[3] + arr[0] > arr[0] - arr[3]) {
//   arr[3] = (10 & 8) + arr[2];
// }

// console.log(arr[1] + arr[2] + arr[3]);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Q. Swap two integers without using third variable ( bit manipulation)
 
*/
let a = 10;
let b = 1;
console.log(a);
console.log(b);
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a);
console.log(b);
