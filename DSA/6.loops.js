let prompt = require("prompt-sync")();
//Types of loops
// 1. Entry controlled loop
// 2. Exit controlled loop
/*
for (intialization/declare; condition; change ) {

}
*/

// let n = Number(prompt("Enter a number"));

// for (let i = 1; i <= n; i++) {
//   console.log("hello, world");
// }

// let i = 10;
// while (i % 3 !== 0) {
//   console.log(i);
//   i--;
// }

// // Reverse a given number
// let n = Number(prompt("Enter the number you want to reverse: "));
// let original = n;
// let rev = 0;
// while (n > 0) {
//   let temp = n % 10;
//   n = Math.trunc(n / 10);
//   rev = rev * 10 + temp;
// }

// console.log(`Reverse of the given number : ${original} is ${rev}`);

function primeFactors(n) {
  let factors = [];
  while (n % 2 == 0) {
    factors.push(2);
    n = n / 2;
  }

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i == 0) {
      factors.push(i);
      n = n / i;
      console.log(`n and i are ${n} and ${i}`);
    }
  }
  if (n > 1) factors.push(n);

  return factors.join(" ");
}
console.log(primeFactors(45));
