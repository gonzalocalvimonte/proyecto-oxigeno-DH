document.querySelector('#searchInput').addEventListener('input', async(e) => {
    try {
        let peticion = await fetch('http://localhost:3000/api/list')

        let respuesta = await peticion.json()

        let products = respuesta.data
        
        let productos = products.map(
            (product) => 
            {let productsForm = {name : product.name,id : product.id, image: product.image}
            return productsForm}
            )

        
        
       
        let resultados = e.target.value.length > 0 ? productos.filter(
        producto => String(producto.name).
        toLocaleLowerCase().
        trim().
        includes(String(e.target.value).toLocaleLowerCase().trim())) : []
       
       
        console.log(resultados)
        document.querySelector('#listProducts').innerHTML = null

        resultados.forEach(element => {
        document.querySelector('#listProducts').innerHTML += `
        <a class="aSearch" href="/products/detalle/${element.id}">
        <img src="${element.image}" alt="imagen del producto">
        <div>
        <p> ${element.name}</p>        
        </div>
        </a>
        `
        })

    } catch (error) {

        console.log(error)

    }
})