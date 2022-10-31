document.addEventListener("DOMContentLoaded", () => {
    fetchData();
}); 


const fetchData = async () => {
    try {
        const url = await fetch(`http://localhost:3000/api/products`)
        const data = await url.json()
        const products = data.data
        funcion(products)
    } catch (error) {
        error
    }
}

const funcion = (products) => {
    if (localStorage.cart){
        let cart = JSON.parse(localStorage.cart)
        cart.forEach((item, index) => {
            let productCart = products.find(product => product.id === item.id)
            console.log(productCart.price)
        });
    }
}






/*
const emptyCart = () => {
    cartRows.innerHTML = `
    <tr>     
        <td colspan="5"><div class="alert alert-warning my-2 text-center">No tienes products en el carrito</div></td>
    </tr>            
    `;
}

const resetCart = () => {
    localStorage.removeItem("cart")
}

const totalPrice = (products) => {
    return products.reduce(
      (acum, product) => (acum += product.price * product.quantity),0)
}
*/