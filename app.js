// fetch("https://striveschool-api.herokuapp.com/api/product/", {
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjY1OWQ0YmUzZDAwMTU4NDYwMGUiLCJpYXQiOjE2NjgwODUzMzgsImV4cCI6MTY2OTI5NDkzOH0.XJBbNPVHhiXi6sNOp7RKJVQqrx5QvsUISghLvKqJGMI"
//   }
// })

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
      <p class="card-text">${product.name}</p>
      <p class="card-text">${product.description}</p>
    </div>
  </div>`

    cards.appendChild(productCard)
  })
}
window.onload = async () => {
  const products = await getProducts()
  renderProducts(products)
}
