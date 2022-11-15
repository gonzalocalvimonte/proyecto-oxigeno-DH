const db = require("../../database/models/index");

module.exports = {
    one: async (req, res) => {
        let users = await db.Users.findByPk(req.params.id)
        return res.status(200).json({
            data: users,
            status: 200
        })
    },
    
    all: async (req, res) => {
        let users = await db.Users.findAll()
        return res.status(200).json({
            total: users.length,
            data: users,
            status: 200
        })
    }
};