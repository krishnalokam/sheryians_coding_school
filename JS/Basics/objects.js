//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Creation of object and accessing its elements
 
*/
// let Person = {
//   name: "Siva Lokam",
//   age: 40,
//   city: "Hyderabad",
// };

// console.log(Person);
// console.log(Person.name);
// console.log(Person.age);
// console.log(Person.city);

// let phone = {
//   model: "iPhone 16 Pro",
//   color: "blue",
//   price: 100000,
//   isGood: true,
// };

// console.log(phone);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
CRUD
 
*/

// let student = {
//   name: "Kishan",
//   age: 20,
//   marks: 78,
//   isSingle: true,
//   batch: "Cohort 3.0",
// };

// //Create
// student.city = "Las Vegas";
// //Read
// console.log(student.age);
// //Update
// student.name = "Ramesh";
// //Delete
// delete student.marks;
// //Read
// console.log(student);

// console.log("Keys ", Object.keys(student));
// console.log("Values ", Object.values(student));
// console.log("Entries ", Object.entries(student));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 
*/
// let username = prompt("Enter username");
// let age = Number(prompt("Enter age"));
// let City = prompt("Enter city");

// let person = { username, age, City };
// console.log(person);

// let user = {
//   name: "Virat Kohli",
//   age: 36,
//   team: "India",
//   isMarried: true,
//   skills: ["Batting", "Dancing", "Fielding"],
//   spouse: {
//     name: "Anushka Sharma",
//     profession: "Acting",
//     age: 30,
//   },
// };

// console.log(user.name);
// console.log(user.skills);
// console.log(user.spouse);
// console.log(user.spouse.name);
// console.log(user.spouse.profession);
// console.log(user.spouse.age);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
function inside obj
 
*/

// let obj = {
//   name: "Chitti",
//   ram: "20mb",
//   isWorking: false,
//   age: 1,
//   skills: ["fight", "walk", "dance"],
//   creator: {
//     name: "Vaashi",
//     age: 40,
//     isIntelligent: true,
//   },
//   greet: function () {
//     console.log("Hello I am Chitti, Robot");
//   },
// };

// obj.greet();
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
calculator
 
*/

// let calculator = {
//   add: (a, b) => a + b,
//   square: (a) => a * a,
//   cube: (a) => a * a * a,
//   mul: (a, b) => a * b,
// };

// console.log("addition of 20, 39:", calculator.add(20, 39));
// console.log("Square of 25:", calculator.square(25));
// console.log("Cube of 25:", calculator.cube(25));
// console.log("Multiplication of 25 with 4:", calculator.mul(25, 4));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 
*/
// for (let i = 1; i <= 1000; i++) {
//   console.log(i, Math.random() * 1);
// }
// prompt("Enter to clear the console");
// console.log(console);
// console.clear();

// console.timeLog("test");
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Array as object
 
*/

// let arr = [10, 20, 30, 40];

// arr[-1] = 99;
// arr["name"] = "Siva";
// console.log(arr);
// console.log(arr.name);
// let index = 0;
// console.log(arr["name"]);
// arr.age = 40;
// console.log(arr);
// console.log(typeof arr);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Object.seal()
Object.freeze()
 
*/
// const groom = {
//   name: "Salman",
//   age: 60,
// };

// const bride = {
//   name: "Katrina",
//   age: 42,
// };

// groom.name = "Vicky";

// console.log(groom.name + " Weds " + bride.name);

// Object.seal(groom);
// //Seal allows updation but, restricts creation or deletion

// groom.city = "Mumbai";

// console.log(groom); // city not added

// delete groom.age;
// console.log(groom); // age not deleted

// groom.age = 62;
// console.log(groom); //age updated

// Object.freeze(bride);

// bride.city = "Mumbai"; //creation
// delete bride.age; //deletion
// bride.name = "Priyanka"; //updation
// console.log(bride); //no change to original object
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Arrays seal and freeze
 
*/
// let arr = [10, 20, 30, 40];

// Object.seal(arr);

// // arr.push(50);//Cannot add property 4, object is not extensible

// // arr[4] = 55; // no error but did nothing

// // delete arr[2]; // no error, but did nothing

// arr[0] = 100; // will update the 0th index to 100
// console.log(arr); //

// Object.freeze(arr);
// arr[0] = 1000; // no error, but did nothing
// console.log(arr);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Destructuring
 
*/

// let arr = [10, 20, 30, 40];

// // let [a, b, c, d] = arr;
// // console.log(a);

// let [a, , _, d] = arr;
// console.log(a);
// // console.log(b);
// // console.log(c);
// console.log(d);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
rest operator
 
*/

// let names = [
//   "aman",
//   "akbar",
//   "anthony",
//   "biswak",
//   "badshah",
//   "catch",
//   "deliver",
//   "find",
// ];

// let [a, b, ...c] = names;
// console.log(c);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 Destructuring object
*/

// let obj = {
//   name: "John Doe",
//   age: 35,
// };

// let { name, ...rest } = obj;
// console.log(name);
// console.log(rest);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Shallow copy
 
*/

let obj = {
  name: "Sriram",
  age: 20,
  city: "Narsapur",
  college: {
    name: "SCET",
    branches: ["ECE", "CSE", "IT"],
  },
};

let obj2 = { ...obj };

obj2.college.name = "JNTU";
console.log(obj2); // both objects college name changed to JNTU
console.log(obj); // both objects college name changed to JNTU

let deepcopy = JSON.stringify(obj);

console.log(deepcopy);

let recover = JSON.parse(deepcopy);
console.log(recover);
