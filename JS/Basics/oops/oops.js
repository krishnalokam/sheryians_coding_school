// // "use strict";
// var zero = {
//   fname: "Sarthak",
//   lname: "Sharma",
//   greet: function () {
//     const sayMyName = () => {
//       console.log(this);
//     };
//     sayMyName();
//   },
// };

// zero.greet();
// // console.log(this);

// let dada = {
//   fname: "Dhirubhai",
//   lname: "Ambani",
//   land: "100 acre",
// };

// let papa = {
//   fname: "Mukesh",
//   lname: "Ambani",
//   company: "Reliance Industries Ltd",
// };

// let beta = {
//   fname: "Anant",
//   lname: "Ambani",
//   role: "Director at Reliance Industries",
// };

// beta.__proto__ = papa;
// papa.__proto__ = dada;

// console.log(beta);
// console.log(beta.land);
// console.log(beta.company);
// console.log(beta.role);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Classes
 
*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
class User {
  constructor(fname, lname, contact) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
  }
  greet() {
    console.log(`Welecome ${this.fname} ${this.laname}`);
  }
}
