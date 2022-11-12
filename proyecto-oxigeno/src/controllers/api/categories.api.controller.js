let db = require('../../database/models/index')

module.exports = {
    all: async (req, res) => {
        let categories = await db.categories.findAll()
        return res.status(200).json({
            total: categories.length,
            data: categories,
            status: 200
        })
    }
}