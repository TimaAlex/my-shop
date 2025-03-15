let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function updateCart() {
    let cartElement = document.getElementById("cart");
    if (!cartElement) {
        console.error("Cart element not found!");
        return;
    }

    cartElement.innerHTML = "<h3>Корзина:</h3>";
    if (cart.length === 0) {
        cartElement.innerHTML += "<p>Поки що порожньо</p>";
    } else {
        cart.forEach((item, index) => {
            cartElement.innerHTML += `<p>${item} <button onclick="removeFromCart(${index})">Видалити</button></p>`;
        });
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.addEventListener("DOMContentLoaded", () => {
    updateCart();
});
