const { createElement } = require("react");

const h3 = document.querySelector("h3");

const id = h3.getAttribute("id");
console.log(id);

h3.setAttribute("width", "200px");
h3.removeAttribute("class");

const is_h3_Class = h3.hasAttribute("class");
console.log(is_h3_Class);

const userCard = document.querySelector("#userCard");

console.log(userCard.getAttribute("data-user-id"));

userCard.dataset.userId = "678";
console.log(userCard.getAttribute("data-user-id"));

//insert element

createElement;

// Old methods
// insertBefore;
// appendChild;
// removeChild;

// new methods
//append()
//prepend()
// before
// after
// replaceWith
//replaceChild
