// setTimeout(() => {
//   console.log("1");
// }, 5000);

// setTimeout(() => {
//   console.log("2");
// }, 2000);

// setTimeout(() => {
//   console.log("3");
// }, 6000);

// // const users = fetch("https://api.example.com/users");

// // console.log(users);
// let a = 10;
// console.log(window);

// console.log("Start");

// setTimeout(function a1() {
//   console.log("Timeout after 3 sec, variable a is", a);
// }, 3000);

// console.log("End");

// const response = fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log(response);

// response.then((res) => {
//   console.log("response recieved");
//   console.log(res.json());
// });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// promise states
//     - pending
//     - resolved / fullfilled
//     - rejected

// let counter = 0;
// const secondsDiv = document.getElementById("seconds");
// setInterval(() => {
//   secondsDiv.textContent = ++counter;
// }, 1000);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
setTimeout, setInterval
clearTimeout, clearInterval
 
// */
// function greet(name, city) {
//   console.log(`Hello I am ${name}, from ${city}`);
//   if (++counter > 5) {
//     clearInterval(intervalId);
//   }
// }
// setTimeout(greet, 1000, "Siva", "Hyderabad");
// let counter = 0;
// const intervalId = setInterval(greet, 2000, "Siva", "Hyderabad");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 
*/
let counter = 0;

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log("For loop Timeout: " + i);
  }, 1000);
}

while (++counter) {
  setTimeout(function () {
    console.log("while loop counter: ", counter);
  }, 1000);

  if (counter >= 10) {
    break;
  }
}
