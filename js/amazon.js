let productHtml = "";

products.forEach((product) => {
  productHtml += `
    <div class="product-container">
          <div class="product-img-container">
            <img src="${product.image}" />
          </div>
          <div class="product-name">${product.name}</div>
          <div class="product-rating-stars">
            <img src="images/ratings/rating-${product.rating.stars * 10}.png" />
            <span class="rating-count">${product.rating.count}</span>
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
          <div class="product-add-to-cart js-add-to-cart-btn" data-product-id="${
            product.id
          }"><button>Add to Cart</button></div>
        </div>
  `;
});

document.querySelector(".js-product-grid").innerHTML = productHtml;

document.querySelectorAll(".js-add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;

    let matchingItem;
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }

    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  });
});
