// https://app.notion.com/p/JavaScript-Beginner-Practice-Questions-Phase-2-Sheet-2-36caa7c5a79e80128adbd8e7df778705
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
### Intermediate

Create an array of 5 favorite movies and print all values.

**Hint:** Use indexing
 
*/

// let movies = [
//   "Kung fu Panda",
//   "Dhurandhar",
//   "Gayapadda Simham",
//   "Athadu",
//   "Spy",
//   "Designaged Survivors",
// ];
// for (let i = 0; i < movies.length; i++) {
//   console.log(movies[i]);
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.

**Hint:** Mixed data types + nested indexing
 
*/

// let student = [101, "Siva Lokam", true, [12, 23, 45]];
// console.log(student[3]);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
### Intermediate

Print the first and last element of an array.

**Hint:** Use `0` and `length - 1`

###
 
*/
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("First element of the array is " + arr[0]);
// console.log("Last element of the array is " + arr[arr.length - 1]);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Swap the second and second-last element using indexing.

**Hint:** Use temporary variable
 
*/
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let temp = arr[1];
// arr[1] = arr[arr.length - 2];
// arr[arr.length - 2] = temp;

// console.log(arr);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Create a 2D array and print all first elements of inner arrays.

**Hint:** Double indexing
 
*/
// let twoDArray = [
//   [10, 20, 30],
//   [40, 50, 60],
// ];
// console.log(twoDArray[0]);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Find the sum of all diagonal elements in a 3x3 matrix.

**Hint:** Same row and column index
 
*/

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let sum = 0;
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     if (i == j) {
//       sum += matrix[i][j];
//     }
//   }
// }
// console.log(sum);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Find total elements in an array without counting manually.

**Hint:** Use `.length`

###
 
*/
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Create a function that checks whether array length is even or odd.

**Hint:** Use modulus operator
 
*/
// function isEven(arr) {
//   return arr.length % 2 == 0;
// }
// console.log(isEven(arr));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Add 3 new elements at the end of array.

**Hint:** Use `push()`
 
*/
// let arr = [10, 20, 30];
// arr.push(40);
// arr.push(50);
// arr.push(60);
// console.log(arr);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Add elements dynamically inside loop from another array.

**Hint:** Loop + push
 
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Remove last element and print removed value.

**Hint:** Store `pop()` result
 
*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let lastElement = arr.pop();
// console.log(lastElement);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Keep removing elements until array becomes empty.

**Hint:** Use `while` loop
 
*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// while (arr.length > 0) {
//   console.log(arr.pop());
// }
// console.log(arr);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Add one username at beginning of array.

**Hint:** Use `unshift()`
 
*/
// let names = ["Ram", "Lakshman", "Sita"];
// names.unshift("Bharata");
// console.log(names);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

Insert multiple elements at beginning without replacing existing ones.

**Hint:** Multiple arguments
 
*/
// let data = [1, 2, 3, 4, 5, 6];
// data.unshift(10, 20, 30, 40, 50);
// console.log(data);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 Remove first element from array.

**Hint:** Use `shift()`
*/
// let data = [1, 2, 3, 4, 5, 6];
// data.shift();

// console.log(data);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Remove first element repeatedly until only 2 elements remain.

**Hint:** Loop + length check
 
*/
// let data = [1, 2, 3, 4, 5, 6];
// while (data.length > 2) {
//   let value = data.shift();
//   console.log(value);
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Remove 2 elements from middle of array.

**Hint:** `splice(start, deleteCount)`
 
*/
// let data = [1, 2, 3, 4, 5, 6];
// data.splice(data.length / 2, 2);
// console.log(data);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Replace 3 middle elements with 5 new values.

**Hint:** Use insertion with splice
 
*/
// let data = [1, 2, 3, 4, 5, 6];
// data.splice(data.length / 2, 3, 10, 20, 30, 40, 50);
// console.log(data);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Reverse an array using method.

**Hint:** Use `reverse()`
 
*/
// let data = [1, 2, 3, 4, 5, 6];
// data.reverse();
// console.log(data);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Reverse only first half of array.

**Hint:** Manual swapping
 
*/
// let data = [1, 2, 3, 4, 5, 6];
// let first_half = data.slice(0, data.length / 2);
// let second_half = data.slice(data.length / 2);
// first_half.reverse();
// let result = first_half.concat(second_half);
// console.log(result);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Sort numbers in ascending order.

**Hint:** Compare function

###
 
*/
// let data = [23.23, 43, 75, 121, 34, 23, 75, 34];
// data.sort((a, b) => a - b);
// console.log(data);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
ort array so even numbers come first and odd later.

**Hint:** Custom compare logic
 
*/
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// data.sort((a, b) => (a % 2) - (b % 2));
// console.log(data);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Extract first 4 elements into new array.

**Hint:** Use `slice()`
 
*/
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let part = data.slice(0, 4);
// console.log(part);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Create a copy excluding first and last element.

**Hint:** Use start and end indexes
 
*/
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let copy = data.slice(1, data.length - 1);
// console.log(copy);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Merge two arrays.

**Hint:** Use `concat()`
 
*/
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8, 9, 10];

// let mergedArray = arr1.concat(arr2);
// console.log(mergedArray);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 Merge 3 arrays and remove duplicate values.

**Hint:** Combine + loop/includes
*/
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7, 8];
// let arr3 = [6, 7, 8, 9, 10, 11];

// let merged = arr1.concat(arr2).concat(arr3);
// console.log(merged);
// for (let i = 0; i < merged.length; i++) {
//   while (merged.indexOf(merged[i], i + 1) != -1) {
//     let index = merged.indexOf(merged[i], i + 1);
//     // console.log("Index is " + index);
//     merged.splice(index, 1);
//   }
// }
// console.log("After: ");
// console.log(merged);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Find index of `"Rahul"` in array.

**Hint:** Use `indexOf()`
 
*/
// let names = ["Ramesh", "Suresh", "Sri ram", "Rahul", "Sandeep"];
// let index = names.indexOf("Rahul");
// console.log("Index is " + index);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Find all positions of repeated number `5`.

**Hint:** Loop through entire array
 
*/
// let arr = [1, 2, 5, 3, 4, 5, 6, 7, 5, 8, 9, 5, 10, 5];
// let positions = [];
// let i = 0;
// while (arr.indexOf(5, i) != -1) {
//   let index = arr.indexOf(5, i);
//   positions.push(index);
//   i = index + 1;
// }
// console.log(positions);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Convert array into comma separated string.

**Hint:** Use `join(",")`
 
*/

// let arr = [1, 2, 3, 4, 5];
// let data = arr.join(",");
// console.log("data =>" + data);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Convert array into sentence format.

**Hint:** Join with spaces
*/

// let data = ["My", "Name", "is", "Siva", "Lokam"];
// let name = data.join(" ");
// console.log(name);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Print all array elements using loop.

**Hint:** Loop through indexes
 
*/
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Print elements at only even indexes.

**Hint:** Increase loop smartly
 
*/
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 Print all values using `for...of`.

**Hint:** Direct value iteration
*/
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (value of arr) {
//   console.log(value);
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Count vowels from array of characters.

**Hint:** Use conditions inside loop
 
*/
// let name = "This is a sAmple sentence to test";
// let data = name.split("");
// let vowels = ["a", "e", "i", "o", "u"];
// console.log(data);
// let vowels_count = 0;
// let vowels_in_array = [];
// for (let i = 0; i < data.length; i++) {
//   if (vowels.includes(data[i].toLowerCase())) {
//     vowels_in_array.push(data[i]);
//     vowels_count++;
//   }
// }
// console.log(vowels_count);
// console.log(vowels_in_array);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Assign one array to another variable and modify second one.

**Hint:** Observe original array
 
*/
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = arr1;

// arr2.push(99);
// arr2.unshift(10);
// console.log("arr1:" + arr1);
// console.log("arr2:" + arr2);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Create true copy so original array does not change.

**Hint:** Use spread operator
 
*/
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [...arr1];

// arr2.push(99);
// arr2.unshift(10);
// console.log("arr1:" + arr1);
// console.log("arr2:" + arr2);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Copy array into new array.

**Hint:** Use `...`
 
*/
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [...arr1];
// console.log("arr1:" + arr1);
// console.log("arr2:" + arr2);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Merge arrays and add extra values in between.

**Hint:** Combine spread carefully
 
*/
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [10, 20, 30, 40, 50];

// let arr3 = [...arr1, 100, 200, 300, ...arr2];
// console.log(arr3);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                      Sheet 3
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Sheet 3
 You are given an array of prices.

Print each price with `"₹"` before it.
*/
// let prices = [100, 250, 399, 499];

// prices.forEach((price) => console.log("₹" + price));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
You are given an array of students.
 Print:

- `"Pass"` if marks are greater than 50
- `"Fail"` otherwise

Output format:

```jsx
Anubhav - Pass
Rahul - Fail
```
*/
// let students = [
//   { name: "Anubhav", marks: 85 },
//   { name: "Rahul", marks: 42 },
//   { name: "Aman", marks: 90 },
// ];

// students.forEach((student) => {
//   if (student.marks > 50) {
//     console.log(student.name + " - Pass ");
//   } else {
//     console.log(student.name + " - Fail ");
//   }
// });
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Convert all names into uppercase.
 
*/
// let names = ["anubhav", "rahul", "aman"];
// let namesUpper = names.map((name) => name.toUpperCase());
// console.log(namesUpper);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
You are given products.
 Create a new array where:

- Every product has a new property `discountPrice`
- Discount is 10%

Expected:

```jsx
[
  { name: "Laptop", price: 50000, discountPrice: 45000 }
]
```
*/
// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
// ];

// let newProducts = products.map((product) => {
//   product["discountPrice"] = product.price - (product.price * 10) / 100;
//   return product;
// });
// console.log(newProducts);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Filter all even numbers.
 
*/
// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// let even_nums = nums.filter((num) => num % 2 == 0);
// console.log(even_nums);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
You are given users.
 Return only active users.
*/
// let users = [
//   { name: "Anubhav", active: true },
//   { name: "Rahul", active: false },
//   { name: "Aman", active: true },
// ];

// let active_users = users.filter((user) => user.active);
// console.log(active_users);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Find total sum of array.
 
*/

// let nums = [10, 20, 30, 40];
// let sum = nums.reduce((acc, val) => acc + val);
// console.log(sum);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Count frequency of elements.
 Expected Output:
{
  apple: 3,
  banana: 2,
  orange: 1
}
*/
// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// let frequency = fruits.reduce((acc, val) => {
//   acc[val] = (acc[val] || 0) + 1;
//   return acc;
// }, {});
// console.log(frequency);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Find first number greater than 50.
 
*/
// let nums = [20, 35, 60, 80];
// let greater = nums.find((ele) => ele > 50);
// console.log(greater);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Find a user with username "admin".
 
*/
// let users = [
//   { username: "rahul" },
//   { username: "admin" },
//   { username: "aman" },
// ];

// let admin = users.find((user) => user.username == "admin");
// console.log(admin);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Find index of number 90.
 
*/
// let nums = [10, 40, 90, 50];
// let index = nums.findIndex((num) => num == 90);
// console.log(index);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 Check if any number is negative.
*/
// let nums = [10, 20, -5, 40];

// let isNegative = nums.some((ele) => ele < 0);
// console.log(isNegative);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Check if any product is out of stock.
 
// */
// let products = [
//   { name: "Laptop", stock: 5 },
//   { name: "Phone", stock: 0 },
// ];

// let out_of_stock = products.some((product) => product.stock === 0);
// console.log(out_of_stock);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Check if all numbers are positive.
 
*/
// let nums = [10, 20, 30, 40];

// let isPositive = nums.every((num) => num > 0);
// console.log(isPositive);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Check if all students passed.
 Passing marks: 40
*/
// let students = [
//   { name: "A", marks: 80 },
//   { name: "B", marks: 45 },
//   { name: "C", marks: 60 },
// ];

// let allPass = students.every((student) => student.marks > 40);
// console.log(allPass);
