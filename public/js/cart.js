document.addEventListener("DOMContentLoaded", () => {
    fetchData();
}); 

const fetchData = async () => {
    try {
        const url = await fetch(`http://localhost:3000/api/products`)
        const data = await url.json()
        const products = data.data
        findAndShow(products)
        resetCart()
    } catch (error) {
        error
    }
}

const table = document.querySelector(".table-cart")// tabla completa
const tableBody = document.querySelector("#data")// cuerpo tabla
const shipping = document.querySelector(".shipping")// envio
const payBtn = document.querySelector(".payBtn")// boton comprar
const empty = document.querySelector(".empty")// span titulo
const clear = document.querySelector(".clear")// icono tacho basura
const totalPrice = document.querySelector(".total-price")//precio total


const findAndShow = (products) => {
    if (localStorage.cart){
        let total = 0
        removeAttribute(shipping)
        removeAttribute(payBtn)
        removeAttribute(table)
        empty.innerText = ""
        let cart = JSON.parse(localStorage.cart)
        cart.forEach((item) => {
            let search = products.find(product => product.id === item.id)
            // console.log(search)
            tableBody.innerHTML += 
            `            
            <tr>
            <td class="item">${search.name}</td>
            <td data-id="${item.id}"  class="cantidad">
            <button data-id="${item.id}" class="mas" type="button">
            +
            </button>
            <span class='quantity'>${item.quantity}</span> 
            <button data-id="${item.id}" class="menos" type="button">
            -
            </button></td>
            <td class="total">$ ${search.price * item.quantity}</td>
            </tr>
            `
            btnsIncrDecr(cart)
            let res = (search.price * item.quantity)
            total += res
            totalPrice.innerText = total
        })
    }
}

const btnsIncrDecr = (cart) => {
    const btnIncr = document.querySelectorAll(".mas")
    const btnDecr = document.querySelectorAll(".menos")
    const quantity = document.querySelector('.quantity')
    
    // sumar 
    btnIncr.forEach(btn => {
        btn.addEventListener("click", () => {          
            let btnId = parseInt(btn.dataset.id)
            let search = cart.find(p => p.id == btnId)
            let updateCart = cart 
            if(search){
                updateCart.map(p => {
                    if(p.id == btnId){
                        p.quantity ++
                    } return p
                })
            } 
            localStorage.setItem("cart", JSON.stringify( updateCart ))
        })
    })

    // restar
    btnDecr.forEach(btn => {
        btn.addEventListener("click", () => {          
            let btnId = parseInt(btn.dataset.id)
            let search = cart.find(p => p.id == btnId)
            let updateCart = cart 
            if(search){
                updateCart.map(p => {
                    if(p.id == btnId && p.quantity > 0){
                        p.quantity --
                    } return p
                })
            } 
            localStorage.setItem("cart", JSON.stringify( updateCart ))
        })
    })
}

const resetCart = () => {
    clear.addEventListener("click", () => {
        let res = window.confirm("Desea vaciar el carrito de compras?")
        if (res){
            localStorage.removeItem("cart")
            location.reload()
        }
    })
}

const removeAttribute = (x) => {
    x.removeAttribute("hidden")
}
