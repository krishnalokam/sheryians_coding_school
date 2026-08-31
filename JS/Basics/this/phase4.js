// console.log(this);
// function hello() {
//   console.log(this);
// }

// hello();

// const hellfn = hello;
// console.log("calling hellofn");
// hellfn();

// const user = {
//   name: "Ramesh",
//   greet() {
//     console.log("Hi " + this.name);
//   },
//   sayHi: () => {
//     console.log("sayHi " + this.name);
//   },
// };

// user.greet();

// const greetRamesh = user.greet;
// greetRamesh();

// user.sayHi();

// const user = {
//   firstName: "Siva",
//   lastName: "Lokam",
//   greet: function () {
//     console.log(this); // user
//     const sayName = function () {
//       console.log(this); //window
//     };
//     return sayName;
//   },
// };

// user.greet()();

const student1 = {
  firstName: "Siva",
  lastName: "Lokam",
  //   greet: function (city, state) {
  //     console.log(`I am  ${this.firstName} ${this.lastName}, ${city} (${state})`);
  //   },
};
//call , apply, bind
// var greet = function (city, state) {
//   console.log(`I am  ${this.firstName} ${this.lastName}, ${city} (${state})`);
// };
// const student2 = {
//   firstName: "Rohit",
//   lastName: "Sharma",
// };
// const student3 = {
//   firstName: "Virat",
//   lastName: "Kohli",
// };

// greet(student1, "Hyderabad", "Telangana");
// greet.call(student2, "Mumbai", "Maharashtra");
// greet.call(student3, "Delhi", "Delhi");

// // var greetSiva = greet(student1);
// // greetSiva("Hyderabad", "Telangana");
// greet.apply(student1, ["Hyderabad", "Telangana"]);

// var greeRohit = greet.bind(student2, "Mumbai");
// greeRohit("MH");

// console.log(typeof this);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
    Prototype
*/

// var arr = [10, 20, 30];
// console.log(arr);

// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name) {
    super(name);
  }
}
console.log(typeof Person);
console.log(typeof Student);
