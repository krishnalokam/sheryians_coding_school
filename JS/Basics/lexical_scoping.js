var user = "Brendan Eich";

function greet() {
  var age = 35;
  function inner() {
    console.log("JS founder and his age is: ", user, age);
  }
  return inner;
}

var out = greet();
out();
