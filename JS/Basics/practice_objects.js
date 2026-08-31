// https://app.notion.com/p/JavaScript-Beginner-Practice-Questions-Phase-2-Sheet-4-36eaa7c5a79e809f9fd9c64433500b6f

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
### Create an Object

Create an object for a student with:

- name
- age
- course

Then print all values.
 
*/

// let person = {
//   name: "Siva Lokam",
//   age: 40,
//   course: "Full stack MERN development",
// };

// console.log(person);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
const car = {
  brand: "BMW",
  model: "M4",
  year: 2022
}
 Print:

- brand
- model

using both:

- dot notation
- bracket notation
*/
// const car = {
//   brand: "BMW",
//   model: "M4",
//   year: 2022,
// };
// console.log(car.brand);
// console.log(car.model);

// console.log(car["brand"]);
// console.log(car["model"]);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
3. Update Object Value
 Change the age of a user from 20 to 25.
*/
// const user = {
//   name: "Anubhav",
//   age: 20,
// };

// user.age = 25;

// console.log(user);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Add a new property:
 ```jsx
isAdmin: true
```
*/
// const user = {
//   name: "Anubhav",
//   age: 20,
// };

// user.isAdmin = true;
// console.log(user);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 delete password
*/
// const account = {
//   username: "john",
//   password: "12345",
// };
// delete account.password;
// console.log(account);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Write a function that returns how many properties an object has.
 
*/

// const car = {
//   brand: "BMW",
//   model: "M4",
//   year: 2022,
// };

// total_keys = Object.keys(car).length;

// console.log(total_keys);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Print all keys and values from this object.
 
*/
// const person = {
//   name: "Rahul",
//   age: 22,
//   city: "Delhi",
// };

// console.log("Entries ", Object.entries(person));
// for (key in person) {
//   console.log(key, person[key]);
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Check whether "email" exists inside an object or not.
 
*/
// const person = {
//   name: "Rahul",
//   age: 22,
//   city: "Delhi",
//   email: "person@gmail.com",
// };

// console.log("email property exists?", "email" in person);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Merge these two objects into one.
 
*/

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const merged = { ...obj1, ...obj2 };

// console.log(merged);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

Convert this object into an array of key-value pairs.
 
*/
// const user = {
//   name: "Aman",
//   age: 21,
// };
// let result = [];

// for (key in user) {
//   result.push(key + "-" + user[key]);
// }
// console.log(result);

// let result2 = Object.entries(user);
// console.log(result2);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Find the student with highest marks
 
*/
// const marks = {
//   Anubhav: 95,
//   Rahul: 82,
//   Aman: 90,
// };

// let highest = Object.entries(marks).reduce(function (acc, value) {
//   if (value[1] > acc[1]) {
//     return value;
//   }
//   return acc;
// });

// console.log(highest[0]);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
12
 Find total salary.
*/
// const salaries = {
//   john: 1000,
//   alex: 2000,
//   bob: 1500,
// };

// let total_salary = Object.entries(salaries).reduce((acc, current) => {
//   return acc + current[1];
// }, 0);

// console.log(total_salary);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Print city and pincode
 
*/

// const user = {
//   name: "Anubhav",
//   address: {
//     city: "Bhopal",
//     pincode: 462001,
//   },
// };

// console.log("city", user.address.city);
// console.log("pincode", user.address.pincode);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Create an object with:
- name
- marks
- method called `getResult`
 
*/

// let person = {
//   name: "Siva Lokam",
//   marks: 95,
//   getResult: function () {
//     if (this.marks > 40) {
//       console.log("pass");
//     } else {
//       console.log("fail");
//     }
//   },
// };

// person.getResult();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Convert this array into an object.
 ```jsx
const arr = ["name", "Anubhav", "age", 24]
```
*/

// const arr = ["name", "Anubhav", "age", 24];
// let object = {};

// for (let i = 0; i < arr.length - 1; i = i + 2) {
//   object[arr[i]] = arr[i + 1];
// }

// console.log(object);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Count frequency of each character.
 
*/
// let str = "banana";
// let strArr = str.split();
// let freq_map = {};
// for (let i = 0; i < str.length; i++) {
//   let temp = str.charAt(i);
//   freq_map[temp] = (freq_map[temp] || 0) + 1;
// }

// console.log(freq_map);
// let str = "banana";

// let freq_map = [...str].reduce((acc, val) => {
//   acc[val] = (acc[val] || 0) + 1;
//   return acc;
// }, {});
// console.log(freq_map);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Group users by age.
 
*/
// const users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 21 },
//   { name: "C", age: 20 },
// ];

// function groupby(arr, key) {
//   let temp_map = arr.reduce((acc, item) => {
//     let groupKey = item[key];
//     if (!acc[groupKey]) {
//       acc[groupKey] = [];
//     }
//     acc[groupKey].push(item);
//     return acc;
//   }, {});

//   return temp_map;
// }
// let freq_map = groupby(users, "age");
// console.log(freq_map);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
18. Deep Property Check
"user.address.city"
 
*/

// user = {
//   name: "Siva Lokam",
//   age: 40,
//   address: {
//     city: "Hyderabad",
//     landmark: "Vivanta Hotel",
//     apartment: "White House",
//   },
// };

// let label = "user.address.city";
