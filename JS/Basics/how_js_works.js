function make() {
  let secret = "hidden";
  return () => secret;
}

var reveal = make();
console.log(reveal());
