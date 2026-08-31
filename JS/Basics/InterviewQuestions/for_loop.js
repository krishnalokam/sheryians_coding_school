for (var i = 1; i <= 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

setTimeout(function () {
  console.log("Now looping through let");
}, 2000);

for (let i = 1; i <= 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 3000);
}
