let db = require('../../database/models/index')

module.exports = {
    list: async (req, res) => {
        let products = await db.Products.findAll()
        let productosNuevos = []
        products.forEach(product => {
            product.image = 'http://localhost:3000/images/Uploads/products/' + product.image
            productosNuevos.push(product)
        });
        return res.status(200).json({
            total: products.length,
            data: productosNuevos,
            status: 200
        })
    }
}