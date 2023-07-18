const addProductsToCartButtons = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart');
const quantityControlButtons = document.querySelectorAll('.product__quantity-control');

quantityControlButtons.forEach(quantityControlButton => {
    quantityControlButton.addEventListener('click', () => {
        const quantityValue = quantityControlButton.parentElement.querySelector('.product__quantity-value');
        let quantity = parseInt(quantityValue.textContent);
        if (quantityControlButton.classList.contains('product__quantity-control_inc')) {
            quantity++;
        } else if (quantityControlButton.classList.contains('product__quantity-control_dec')) {
            quantity--
        }
        if(quantity < 1){
            quantity = 1
        }
        quantityValue.textContent = quantity;
    })
})

addProductsToCartButtons.forEach(addProductsToCartButton => {
    addProductsToCartButton.addEventListener('click', () => {
        const product = addProductsToCartButton.closest('.product');
        const productId = product.dataset.id;
        const productQuantity = parseInt(product.querySelector('.product__quantity-value').textContent);
        const existingCartItem = cart.querySelector(`.cart__product[data-id='${productId}']`)
        if (existingCartItem) {
            const itemQuantity = parseInt(existingCartItem.querySelector('.cart__product-count').textContent)
            existingCartItem.querySelector('.cart__product-count').textContent = productQuantity + itemQuantity;
        } else {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart__product');
            cartItem.dataset.id = productId;
            cartItem.innerHTML = `
            <img class="cart__product-image" src="${product.querySelector('.product__image').getAttribute('src')}" alt="">
            <div class="cart__product-count">${productQuantity}</div>
`
            cart.append(cartItem)
        }
    })
})

