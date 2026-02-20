const loadTopRatedProducts = () => {
    fetch('https://fakestoreapi.com/products')
    .then (response => response.json())
    .then(data => displayTopRatedProducts(data))
}


const displayTopRatedProducts = (products) => {

    // console.log(products);
    const topRatedProducts = products.filter(product => product.rating && product.rating.rate > 4)
    // console.log(topRatedProducts);
    const firstThreeProducts = topRatedProducts.slice(0, 3)
    // console.log(firstThreeProducts);

    const topRatedContainer = document.getElementById('trending-product-container')
    topRatedContainer.innerHTML = ""

    firstThreeProducts.forEach(product => {

      // console.log(product);
      const createTopRatedProducts = document.createElement('div')
      
      createTopRatedProducts.innerHTML = `
              <div class="card bg-base-100 w-96 h-full shadow-sm">
                <figure>
                  <img class="px-20 py-10 bg-gray-200 w-full h-96"
                    src=${product.image}
                    alt="" />
                </figure>
                <div class="card-body">
                  <div class="flex justify-between">
                    <div class="badge badge-soft badge-primary">${product.category}</div>
                    <div class="">
                      <p class=""><i class="fa-regular fa-star"></i> ${product.rating.rate} (${product.rating.count})</p>
                    </div>
                  </div>
                  <h2 class="card-title">
                  ${product.title}
                  </h2>
                  <p>${product.description.slice(0, 100)}...</p>
                  <div class="card-actions flex justify-between">
                  <div onclick="loadProductDetail(${product.id})" class="btn btn-outline px-6">
                    <i class="fa-regular fa-eye pr-6"></i> Details
                  </div>
                  <div class="btn btn-primary px-10"><i class="fa-solid fa-cart-shopping pr-6"></i> Add</div>
                  </div>
                </div>
              </div>
                `
                topRatedContainer.appendChild(createTopRatedProducts)
    });

}


const loadProductDetail = (id) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data => displayProductDetail(data))
}

const displayProductDetail = (data) =>{
  console.log(data);
  const modalContainer = document.getElementById("modal-card-container")
  modalContainer.innerHTML = `
  <div class="card bg-base-100 w-96 h-full shadow-sm">
                <figure>
                  <img class="px-20 py-10 bg-gray-200 w-full h-96"
                    src=${data.image}
                    alt="" />
                </figure>
                <div class="card-body">
                  <div class="flex justify-between">
                    <div class="badge badge-soft badge-primary">${data.category}</div>
                    <div class="">
                      <p class=""><i class="fa-regular fa-star"></i> ${data.rating.rate} (${data.rating.count})</p>
                    </div>
                  </div>
                  <h2 class="card-title">
                  ${data.title}
                  </h2>
                  <p>${data.description}</p>
                </div>
              </div>
  `
  document.getElementById("my_modal_5").showModal()
}


loadTopRatedProducts();