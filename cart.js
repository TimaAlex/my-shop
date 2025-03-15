let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function updateCart() {
    let cartElement = document.getElementById("cart");
    cartElement.innerHTML = "<h3>Корзина:</h3>";
    cart.forEach((item, index) => {
        cartElement.innerHTML += `<p>${item} <button onclick="removeFromCart(${index})">Удалить</button></p>`;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
