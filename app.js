// ------------------ HOMEPAGE ------------------//
// ------------------ HOMEPAGE ------------------//
// ------------------ HOMEPAGE ------------------//

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjY1OWQ0YmUzZDAwMTU4NDYwMGUiLCJpYXQiOjE2NjgwODUzMzgsImV4cCI6MTY2OTI5NDkzOH0.XJBbNPVHhiXi6sNOp7RKJVQqrx5QvsUISghLvKqJGMI"
  }
}

async function getProducts() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    options
  )
  const products = await response.json()
  console.log(products)
  return products
}

function renderProducts(listOfProducts) {
  let cards = document.querySelector(".card-container")

  listOfProducts.forEach((product) => {
    const productCard = document.createElement("div")
    productCard.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
    <div class="card-body">
      <h4 class="card-text text-center">${product.name}</h4>
      <p class="card-text text-center">${product.description}</p>
      <a href="details.html?productId=${product._id}">VIEW DETAILS</a>
    </div>     
  </div>`

    cards.appendChild(productCard)
  })
}
window.onload = async () => {
  const products = await getProducts()
  renderProducts(products)
}

// ------------------ DETAILS PAGE ------------------//
// ------------------ DETAILS PAGE ------------------//
// ------------------ DETAILS PAGE ------------------//

// const params = new URLSearchParams(window.location.search)

// const productId = params.get("productId")

// async function getProduct() {
//   const response = await fetch(
//     `https://striveschool-api.herokuapp.com/api/product/${product._id}`
//   )
//   const product = await response.json()
//   return product
// }

// function renderProduct(product) {
//   document.getElementById("img-detail").innerHTML = ` <div>
// <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
// </div>`

//   document.getElementById("text-detail").innerHTML = `<div>
// <h4 class="text-center">${product.name}</h4>
// </div>`
// }

// window.onload = async () => {
//   const product = await getProduct()
//   renderProduct(product)

// }
