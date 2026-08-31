/*
let set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(40);
set.add(10);

console.log(set);

set.delete(30);
console.log(set);
console.log(set.has(100));
console.log(set.has(10));
console.log(set.size);
*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Remove duplicates in an array
 
*/
// let arr = [1, 2, 3, 2, 1, 5, 6, 3, 5, 4];
// let set = new Set();
// for (let i = 0; i < arr.length; i++) {
//   set.add(arr[i]);
// }
// console.log(set);
// let set = new Set(arr);
// console.log(set);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Q2: Find the element, which has appeared only once in the array
 
*/
// let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4];
// let set = new Set();
// for (let i = 0; i < arr.length; i++) {
//   if (set.has(arr[i])) set.delete(arr[i]);
//   else set.add(arr[i]);
// }
// console.log(set);

var isHappy = function (n) {
  let set = new Set();
  while (true) {
    let sum = 0;
    while (n > 0) {
      let dig = n % 10;
      sum += dig * dig;
      n = Math.floor(n / 10);
    }
    if (sum == 1) return true;
    else if (set.has(sum)) return false;
    else set.add(sum);
    n = sum;
  }
};

console.log(isHappy(19));
