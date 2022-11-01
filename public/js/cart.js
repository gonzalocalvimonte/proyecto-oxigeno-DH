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

const tableBody = document.querySelector("#data")
const table = document.querySelector(".table-cart")
const shipping = document.querySelector(".shipping")
const payBtn = document.querySelector(".payBtn")
const empty = document.querySelector(".empty")
const clear = document.querySelector(".clear")
const totalPrice = document.querySelector(".total-price")


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
            ${item.quantity}
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
    btnIncr.forEach(btn => {
        btn.addEventListener("click", () => {

            console.log(cart)
            console.log(btn.dataset)
        })
    })
    btnDecr.forEach(btn => {
        btn.addEventListener("click", () => {
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
