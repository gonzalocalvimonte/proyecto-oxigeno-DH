const db = require("../../database/models/index");

module.exports = {
    one: async (req, res) => {
        let product = await db.Products.findByPk(req.params.id)
        return res.status(200).json({
            data: product,
            status: 200
        })
    },
    all: async (req, res) => {
        let products = await db.Products.findAll()
        return res.status(200).json({
            total: products.length,
            data: products,
            status: 200
        })
    }
};
