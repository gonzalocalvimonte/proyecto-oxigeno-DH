const cartQuantity = () => {
    return localStorage.cart ? JSON.parse(localStorage.cart).length : 0
}

window.addEventListener("load", () => {

    let btnAdd = document.querySelector(".add-cart")
    let headerCart = document.querySelector(".header-cart")
    headerCart.innerText = cartQuantity()
    
    btnAdd.addEventListener("click", (e) => {
        let productId = e.target.dataset.id       
        if(localStorage.cart){
            // SI EXISTE CARRITO
            let cart = JSON.parse(localStorage.cart)
            let productAtCart = cart.find(x => x.id == productId)
            let updateCart = cart
            // si existe producto en carrito
            if(productAtCart){
                updateCart = cart.map(product => {
                    if(product.id == productId){
                        product.quantity ++
                    } return product
                })
            // si no existe producto en carrito
            } else {
                updateCart.push( {id: parseInt(productId) , quantity: 1} )
            } 
            localStorage.setItem("cart", JSON.stringify( updateCart ))
        } else {
            // SI NO EXISTE CARRITO
            localStorage.setItem("cart", JSON.stringify( [{id: parseInt(productId) , quantity: 1}] ))
        }
        headerCart.innerText = cartQuantity()
    })
})




