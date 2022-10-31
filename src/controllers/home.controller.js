const { Association,Op } = require('sequelize');
let db = require('../database/models/index')
const {resolve} = require('path')
const {unlinkSync} = require('fs')

const controller = {
    
    home: async (req, res) => {
        let productos = await db.Products.findAll()

        return res.render("home/index", {productos});
    },

    who: (req, res) => {
        res.render("home/who");
    },

    contact: (req, res) => {
        res.render("home/contact");
    },

    cart: (req, res) => {
        res.render("home/cart");
    }
}

module.exports = controller