function orderFood() {
  return new Promise(function (resolve, reject) {
    let OrderStatus = false;
    setTimeout(function () {
      if (OrderStatus) {
        console.log("Order delivered");

        resolve();
      } else {
        console.log("Problem with the order");
        reject();
      }
    }, 3000);
  });
}

let dosa = orderFood();
dosa
  .then(function () {
    console.log("Order recieved, Making payment!");
  })
  .catch(function () {
    console.log("Order cancelled!");
  });
