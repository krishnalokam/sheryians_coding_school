//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Intro - Indexing and Displaying
 
*/
// var arr1 = [10, 20, 30];
// var arr2 = ["siva", "krishna", "kumar", "lokam"];
// var arr3 = [10, 20.5, "ram", null, {}];

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Array methods
 push - add element at the end
 pop  - return the last element
 shift - removes teh first element
 unshift - add element at the begining
*/
// let arr = [10, 20, 30];
// arr.push(99);
// arr.push(100);

// console.log(arr);
// arr.pop();
// console.log(arr);

// arr.push("hello");
// arr.push("hell");
// arr.push("hel");
// console.log(arr);
// arr.pop();
// arr.pop();
// let data = arr.pop();
// console.log("data " + data);
// console.log(arr);
// let one = arr.shift("one");
// console.log("one " + one);
// console.log(arr);
// arr.unshift(999);
// console.log(arr);

// let arr = [15, 45, 78, 90, 78];

// arr.shift();
// arr.shift();
// arr.unshift(99);
// arr.pop();
// arr.pop();
// arr.push(89);
// arr.unshift(67);
// arr.push(89);
// arr.unshift(1);
// console.log(arr);

// console.log(arr[3]);

// var arr = [10, 20, 30, 40, 50];
// // arr.splice(-1);
// // console.log(arr);

// arr.splice(1, 0, 11, 21, 31);
// console.log(arr);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Array initialization ways
 
*/

// var arr = [1, 2, 3, 4, 5];

// var arr2 = new Array(5);
// for (let i = 0; i < arr2.length; i++) {
//   arr2[i] = i + 1;
// }

// // arr2.push(1);
// // arr2.push(2);
// // arr2.push(3);
// // arr2.push(4);
// // arr2.push(5);
// console.log(arr);
// console.log(arr2);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 
*/

// var arr = [10, 20, 30, 40, 50];

// arr[10] = 100;

// console.log(arr.length);

//multidimensional array
// var arr = [1, 2, "lol", 10.5, [12, 14, 14, 56]];
// console.log(arr);

// var twodarr = [
//   [10, 20, 30, 40],
//   [11, 21, 31, 41],
//   [12, 22, 32, 42],
// ];
// console.log(twodarr);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Reverse of array
 
*/

// var arr = [10, 20, 30, 40];

// var twodarr = [
//   [10, 20, 30, 40],
//   [11, 21, 31, 41],
//   [12, 22, 32, 42],
// ];

// console.log(arr.reverse());
// console.log(twodarr.reverse());
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Sort
 
*/
// var arr = [12, 42, 121, 11, 3, 4, 66];
// var arr = [4, 3, 2, 1, 5, 6, 7, 8];
// console.log(arr.sort());
// var arr2 = [12, 42, 121, 11, 3, 4, 66];
// console.log(arr2.sort((a, b) => a - b));

// var arr = [11, 44, 22, 55];
// arr.push(77);
// arr.unshift(66);
// arr.unshift(33);
// arr.reverse();
// arr.pop();
// arr.sort((a, b) => a - b);
// arr.reverse();
// // console.log(arr);
// console.log(arr[1]);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Display the elements in the array with a loop
 
*/
// let arr = [10, 20, 33, 44, 55, 6677, 1212, 232];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// // for of loop
// for (value of arr) {
//   console.log(value);
// }
// console.log("***************************************************");
// for (index in arr) {
//   console.log(index);
//   console.log(arr[index]);
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
create an array of even numbers till 100
 
*/
// var arr = [];
// for (let i = 0, j = 2; i < 50; i++, j += 2) {
//   //   arr[i] = j;
//   arr.push(j);
// }

// console.log(arr);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Non mutating methods
 arr.slice(startIndex, endIndex)
 arr.concat(arr2);
*/
// var arr = [10, 20, 30, 40, 50];
// var arr2 = arr.slice(1, -1);
// console.log(arr2);

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9];

// let newArray = arr.concat(arr2);
// console.log(newArray);

// let arr3 = [1, 2, 3].concat([4, 5, 6]);
// console.log(arr3);

// // console.log([1, 2, 3] + [4, 5, 6]);

// console.log(arr3.includes(3));

// let twoDArray = [
//   [10, 20, 30],
//   [40, 50, 60],
// ];

// console.log(twoDArray.includes([10, 20, 30])); //false
// console.log(twoDArray.includes(10)); //false
// console.log(twoDArray[0].includes(10)); //true

// let joined = twoDArray.join("-");
// console.log(joined);

// var name = "Siva Lokam";
// var nameArr = name.split(" ");
// var nameCombined = nameArr.join("+");
// console.log(nameCombined);

// var instituion = "Sheryians Coding School";

// let sArr = instituion.split(" ");

// let sCombined = sArr.join("-");
// console.log(sCombined);

// var instituion = "Sheryians Coding School";

// var arr = instituion.split(" ");
// var brr = arr[1].split("");
// brr.reverse();
// var coding = brr.join("");
// console.log(coding);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
spread operator
 
*/
// let arr = [10, 20, 30, 40];
// let arr2 = [...arr];
// console.log(arr2);

// forEach
// map;
// filter;
// reduce;
// objects;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Foreach
 
*/

// let arr = [10, 20, 30, 40];
// arr.forEach((element, index, arr) => {
//   console.log(element);
// });

// let arr2 = arr.map((element, index, arr) => {
//   element = element * 2;
//   return element;
// });

// console.log(arr2);

// let arr3 = arr.filter((element) => element % 20 == 0);
// console.log(arr3);

// let arr = [10, 20, 30, 40];

// const double = function (elem) {
//   return elem * 2;
// };

// let arr2 = arr.map(double);
// console.log(arr2);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 
*/
// let arr = [11, 22, 33, 44];

// let arr1 = arr.map((ele, index, arr) => {
//   return arr;
// });

// console.log(arr1);

// let arr2 = arr.map((ele, index) => ele * index);
// console.log(arr2);

// let users = ["Abhishek", "Anushka", "Manoj", "Ramesh"];
// let newUsers = users.map((element) => {
//   return element + " Sharma";
// });

// console.log(newUsers);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
filter
 
*/

// let arr = [5, 9, 31, 2, 64, 25, 75, 38, 1];

// let evenArr = arr.filter((elem) => elem % 2 == 0);
// console.log(evenArr);
// let names = ["aman", "basundi", "chintu"];
// let namesUpdated = names.map((ele) => {
//   return ele.toUpperCase();
// });

// console.log(namesUpdated);

// let arr2 = names.filter((ele) => ele.includes("a"));
// console.log(arr2);

// let arr3 = names.filter((ele) => ele.includes("i"));
// console.log(arr3);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
reduce
 
*/

// let arr = [12, 14, 53, 223, 343, 633, 343];

// let sum = arr.reduce((acc, val) => {
//   return acc + val;
// });

// console.log(sum);

// let max = arr.reduce((acc, val) => {
//   if (val > acc) return val;
//   return acc;
// });
// console.log(max);

// let arr = ["apple", "mango", "orange", "apple", "banana", "orange"];
// let freqMap = arr.reduce((acc, val) => {
//   acc[val] = (acc[val] || 0) + 1;
//   return acc;
// }, {});

// console.log(freqMap);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
find
 
*/
var arr = ["rohit", "virat", "Buvi", "bumra", "Buvi"];

console.log(arr.indexOf("buvi"));

var ans = arr.find(function (elem) {
  return elem.toLowerCase() == "buvi";
});
console.log(ans);

var buvis = arr.filter(function (elem) {
  return elem.toLowerCase() == "buvi";
});
console.log(buvis);

var ans = arr.findIndex(function (elem) {
  return elem.toLowerCase() == "buvi";
});
console.log(ans);

var some = arr.some((ele) => ele.includes("a"));
console.log(some);

var every = arr.every((ele) => ele.includes("a"));
console.log(every);
