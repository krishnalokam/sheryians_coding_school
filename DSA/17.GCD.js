let prompt = require("prompt-sync")();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Find GCD in brute force way
 
*/
// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter second number"));
// let gcd = 1;
// for (let i = Math.min(a, b); i >= 1; i--) {
//   if (a % i == 0 && b % i == 0) {
//     gcd = i;
//     break;
//   }
// }
// console.log(gcd);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
GCD using recursive function
 
*/
// function gcd(n, a, b) {
//   if (n == 1) return 1; //this condition can be ignored, as the below statement will satisfy it anyway.
//   if (a % n == 0 && b % n == 0) return n;
//   return gcd(n - 1, a, b);
// }

// let ans = gcd(Math.min(a, b), a, b);
// console.log(ans);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Solve GCD using Euclidean algorithm
 
*/
// function gcd_euclidean(min, max) {
//   let temp = max - min;
//   if (min == temp) return min;
//   else if (min > temp) {
//     max = min;
//     min = temp;
//   } else {
//     max = temp;
//     min = min;
//   }
//   return gcd_euclidean(min, max);
// }

// function gcd_euclidean(a, b) {
//   while (a != b) {
//     if (a > b) a = a - b;
//     else b = b - a;
//   }
//   return a;
// }
// let gcd_e = gcd_euclidean(a, b);
// console.log(gcd_e);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Find the no of prime factors between 1 to n  using sieve algorithm

 
*/
