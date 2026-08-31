// let data = fetch("https://jsonplaceholder.typicode.com/todos/");

// data
//   .then((response) => {
//     if (response.ok && response.status == 200) {
//       return response.json();
//     } else {
//       return new Promise((resolve, reject) => {
//         reject("Network error!");
//       });
//     }
//   })
//   .then((data) => console.log(data[0]))
//   .catch((err) => console.log(err));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
using Fakestore API
 
*/

fetch("https://fakestoreapi.com/producs/")
  .then((response) => {
    console.log();
    console.log("Got the response");
    console.log();
    return response.json();
  })
  .then((data) => {
    console.log(data.length);
    // data[0].forEach((item) => {
    //   console.log(item);
    //   console.log("**********************************************");
    // });

    console.log(data[0]);
  });
