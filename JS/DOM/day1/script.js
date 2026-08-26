// Selection of an element

//only selects tag of the  first matching condition
const h1 = document.querySelector("h1");
console.dir(h1);

h1.textContent = "Hey..";

//For selecting all tags of the matching condition
const h1All = document.querySelectorAll("h1");
console.log(h1All);

const h1Tags = document.getElementsByTagName("h1");
console.log(h1Tags);

const boxDiv = document.getElementById("box");
console.dir(boxDiv);

const box = document.querySelector("#box");
box.innerText = "hellooooooooooooooo";

//change Content
//textContent
//innerHTML
//innerText

box.style.backgroundColor = "#bc6262";
box.style.color = "#FFF";
box.style.fontSize = "32px";

// document.body.innerHTML = "hellooooooooooooooddo";
// document.body.textContent = "hellooooooooooooooo";
// document.body.innerText = "hellooooooooooooooo";
// const h1Alls = document.getElementsByName("heading");
// console.log(h1Alls);
