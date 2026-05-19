// console.log("conditional statements");

let prompt = require("prompt-sync")();

// let age = Number(prompt("Enter your age"));
// if (age > 18) {
//   console.log("Valid voter");
// } else {
//   console.log("Not a valid voter");
// }

// let marks = Number(prompt("Enter your marks"));

// if (marks > 85 && marks <= 100) console.log("Excellent");
// else if (marks > 75 && marks <= 85) console.log("Very Good");
// else if (marks > 75 && marks <= 85) console.log("Very Good");
// else if (marks > 60 && marks <= 75) console.log("Fair");
// else if (marks >= 35 && marks <= 60) console.log("Cleared the Exam");
// else console.log("Failed");

// function isLeapYear(year) {
//   if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
//     console.log("Leap year");
//   } else {
//     console.log("Not a leap year");
//   }
// }

// let year = Number(prompt("Enter the year"));
// isLeapYear(year);

// let amount = Number(prompt("Enter the amount: "));
// let discount = 0;

// if (amount > 5000 && amount <= 7000) {
//   discount = 5;
// } else if (amount > 7000 && amount <= 9000) {
//   discount = 10;
// } else if (amount > 9000) {
//   discount = 20;
// }

// console.log("Payable amount is ", amount - (discount * amount) / 100);

// Power bill calculation
/*
upto 100 - 4.2/ unit 
101 - 200 - Rs 6 / unit
201 - 400 - Rs 8 / unit
> 400   Ra 13 / unit */

// let units = Number(prompt("Enter the no of units"));
// if (units <= 100) {
//   price_per_unit = 4.2;
// } else if (units > 100 && units <= 200) {
//   price_per_unit = 6;
// } else if (units > 200 && units <= 400) {
//   price_per_unit = 8;
// } else if (units > 400) {
//   price_per_unit = 13;
// }

// console.log(`Payable price is ${units * price_per_unit}`);

// let units = Number(prompt("Enter the no of units: "));
// price_per_unit_below_100 = 4.2;
// price_per_unit_below_200 = 6;
// price_per_unit_below_400 = 8;
// price_per_unit_above_400 = 13;

// let amount_payable = 0;
// if (units <= 100) {
//   amount_payable += price_per_unit_below_100 * units;
// } else if (units > 100 && units <= 200) {
//   amount_payable += price_per_unit_below_100 * 100;
//   amount_payable += price_per_unit_below_200 * (units - 100);
// } else if (units > 200 && units <= 400) {
//   amount_payable += price_per_unit_below_100 * 100;
//   amount_payable += price_per_unit_below_200 * 100;
//   amount_payable += price_per_unit_below_400 * (units - 200);
// } else if (units > 400) {
//   amount_payable += price_per_unit_below_100 * 100;
//   amount_payable += price_per_unit_below_200 * 100;
//   amount_payable += price_per_unit_below_400 * 200;
//   amount_payable += price_per_unit_above_400 * (units - 400);
// }

// console.log(`Payable price is ${amount_payable}`);

let units = Number(prompt("Enter the no of units: "));
let amount = 0;
if (units > 400) {
  amount += (units - 400) * 13;
  units = 400;
}

if (units > 200 && units <= 400) {
  amount += (units - 200) * 8;
  units = 200;
}

if (units > 100 && units <= 200) {
  amount += (units - 100) * 6;
  units = 100;
}

amount += units * 4.2;
console.log(`Total amount payable is: ${amount}`);
