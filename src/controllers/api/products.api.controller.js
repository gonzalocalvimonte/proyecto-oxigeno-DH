let db = require('../../database/models/index')

module.exports = {
    list: (req,res) => {
        db.Products
        .findAll()
        .then(products => {
            return res.status(200).json({
                    total: products.length,
                    data: products,
                    status:200
                })
        })
    }
}