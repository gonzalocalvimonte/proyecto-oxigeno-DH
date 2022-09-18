
const controller = {
    
    home: (req, res) => {
        res.render("home/index");
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