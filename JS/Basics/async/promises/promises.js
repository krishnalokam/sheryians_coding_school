// async function getData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let data = await response;
//   //   let bytes = await response.bytes();
//   let output = await response.json();
//   console.log(output);
//   return data;
// }

// getData();

// let p1 = new Promise(function (resolve, reject) {
//   console.log("Promise is pending");
//   let val = true;
//   setTimeout(function () {
//     if (val) {
//       console.log("values is true");
//       resolve("data exists");
//     } else {
//       console.log("value is false");
//       reject("Server error");
//     }
//   }, 3000);
// });

// console.log(p1);
// p1.then(function (data) {
//   console.log("Promise is Fullfilled", data);
// })
//   .catch(function (data) {
//     console.log("Promise is Rejected", data);
//   })
//   .finally(function () {
//     console.log("In Finally!");
//   });

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);
// Promise.resolve().then(() => console.log("Promise"));
// process.nextTick(() => console.log("Process"));
