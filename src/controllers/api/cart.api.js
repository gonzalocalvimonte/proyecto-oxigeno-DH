const db = require("../../database/models/index");

module.exports = {
    product: async (req, res) => {
        let product = await db.Product.findByPk(req.params.id);
        return res.json(product);
    }
};
