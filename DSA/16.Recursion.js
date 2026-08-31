let prompt = require("prompt-sync")();
let n = Number(prompt("Enter number"));
// hello(n);
// function hello(n) {
//   if (n == 0) return;
//   console.log("Hello world ", n);
//   hello(n - 1);
// }

/*
Recursion based on HBI
H = Hypothesis
B = Basecase
I = Induction

Basecase - smallest valid value of that particular input

*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
print numbers from 1 to n using recursion
 
*/
// print(n);
// function print(n) {
//   if (n == 0) return;
//   console.log(n);

//   print(n - 1);
//   //   console.log(n);
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
print sum of n numbers
 
*/
// function sum(n) {
//   if (n == 1) return 1;
//   return n + sum(n - 1);
// }
// console.log(sum(n));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
print factorial of a number using recursion
 
*/
// function factorial(n) {
//   if (n == 1 || n == 0) return 1;

//   return n * factorial(n - 1);
// }
// let fact = factorial(n);
// console.log(fact);

function reverseDigits(n) {
  if (n == 0) return 0;

  if (n < 0) {
    n = n * -1;
    return (
      "-" +
      (n % 10) +
      (Math.floor(n / 10) == 0 ? 0 : reverseDigits(Math.floor(n / 10)))
    );
  }

  console.log(Math.floor(n / 10));

  return (
    (n % 10) + (Math.floor(n / 10) == 0 ? 0 : reverseDigits(Math.floor(n / 10)))
  );
}

let nn = reverseDigits(1234);
;pg