// var global = "I am global";

// function counter(param = "test", start = null) {
//   return function () {
//     let count = start == null ? 0 : start;

//     global = "dummy";
//     console.log("global variable is " + global);
//     console.log("Name of the function is " + param);

//     count++;
//     return count;
//   };
// }

// // global = "global got changed once";
// // var inc = counter();
// // global = "global got changed twice";

// // console.log(inc());
// // console.log(inc());

// var inc = counter("lapCounter", 2);
// inc();
// inc();

// console.log(inc());
// console.log(inc());
// console.log(inc());
// console.log(inc());
// console.log(inc());
// console.log(global);

// function first() {
//   let a = 10;
//   function second() {
//     let b = 20;
//     function third() {
//       let c = 30;
//       console.log("a: " + ++a + " b: " + ++b + " c: " + ++c);
//     }

//     return third;
//   }
//   return second();
// }

// var three = first();
// var another = first();
// three();
// three();
// three();
// three();
// console.log("********************");
// another();

function createBankAccount() {
  let balance = 0;
  return {
    deposit(amount) {
      balance += amount;
      return amount;
    },
    getBalance() {
      return balance;
    },
  };
}

let account = createBankAccount();
console.log(account);
console.log(account.deposit(1000));
console.log(account.getBalance());

// currying
// ❌ WITHOUT Currying
function filter(predicate, array) {
  return array.filter(predicate);
}

const isEven = (x) => x % 2 === 0;
const numbers = [1, 2, 3, 4, 5];

filter(isEven, numbers); // [2, 4]
filter(isEven, [10, 11, 12]); // [10, 12]
// Have to pass both arguments every time

// ✅ WITH Currying
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

const curriedFilter = curry(filter);
const filterEven = curriedFilter(isEven); // Specialized function

filterEven(numbers); // [2, 4]
filterEven([10, 11, 12]); // [10, 12]
// Reuse filterEven! Cleaner code!
