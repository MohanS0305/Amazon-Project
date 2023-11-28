let productHtml = "";

products.forEach((product) => {
  productHtml += `
    <div class="product-container">
          <div class="product-img-container">
            <img src="${product.image}" />
          </div>
          <div class="product-name">${product.name}</div>
          <div class="product-rating-stars">
            <img src="${product.ratings.stars}" />
            <span class="rating-count">${product.ratings.count}</span>
          </div>
          <div class="product-price">$${(product.priceCents / 100).toFixed(
            2
          )}</div>
          <div class="product-cart-quantity">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div class="product-add-to-cart js-add-to-cart-btn"><button>Add to Cart</button></div>
        </div>
  `;
});

document.querySelector(".js-product-grid").innerHTML = productHtml;
