// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    const products = JSON.parse(JSON.stringify(json));
    //console.log(products[2].title);

    // You can now work with the 'products' array of objects
    // document.getElementById("root").innerHTML = products[2].title;
    let data1 = "";
    products.map((values) => {
      data1 += `
      <div class="card">
        <h1 class="title">${values.title}</h1>
        <img
          src="${values.image}"
          alt="img"
          class="images"
        />
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
      </div>
    `;
    });
    document.getElementById("cards").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });

// fetch("https://fakestoreapi.com/products")
//   .then((data) => {
//     console.log(data);

//     return data.json();
//   })
//   .then((completedata) => {
//     console.log(completedata);

//   });
