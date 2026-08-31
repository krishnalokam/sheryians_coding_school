async function getProducts() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();

    if (Array.isArray(data)) {
      data.forEach((item) => {
        console.log("______________________");
        console.log(item.title);
      });
      console.log("______________________");
    } else {
      console.log(data);
    }
  } catch (err) {
    console.log(err);
    console.log("we got the error information");
  }
}

getProducts();
