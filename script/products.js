const loadProducts = () => {
    fetch('https://fakestoreapi.com/products')
    .then (response => response.json())
    .then(data => displayProducts(data))
}

const displayProducts = (products) => {

    const productContainer = document.getElementById('product-container')
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

