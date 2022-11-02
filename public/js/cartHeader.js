const cartQuantity = () => {
    return localStorage.cart ? JSON.parse(localStorage.cart).length : 0
}

window.addEventListener('load', () => {
    let headerCart = document.querySelector(".header-cart")
    headerCart.innerText = cartQuantity()
})

