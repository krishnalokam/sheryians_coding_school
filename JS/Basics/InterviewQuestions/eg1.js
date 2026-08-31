console.log("Start");

setTimeout(function () {
  console.log("In Timeout");
}, 0);

let p1 = new Promise(function (resolve, reject) {
  console.log("Inside Promise");
  resolve("promise completed");
});

p1.then(function (data) {
  console.log(data);
});

console.log("End");
