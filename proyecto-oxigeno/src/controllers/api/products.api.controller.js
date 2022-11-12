let db = require('../../database/models/index')

module.exports = {
    list: async (req, res) => {
        let products = await db.Products.findAll()
        return res.status(200).json({
            total: products.length,
            data: products,
            status: 200
        })
    }
}