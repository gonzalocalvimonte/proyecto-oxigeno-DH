const db = require('../database/models/index')

const middleware = async (req, res, next) => {
    let user = null
    if(req.cookies.user) {
        try {
            user = await db.Users.findOne({where:{email:req.cookies.user}})
            req.session.user = user
        } catch (error) {
            console.log(error);
        }
    }
    if(req.session && req.session.user){
        user = req.session.user
    }
    // console.log(user);
    res.locals.user = user
    return next()
}

module.exports = middleware


//para session con cookie
// const {all} = require("../models/users.models")
    /*
    if (req.cookies && req.cookies.usuario){
        let users = all()
        let result = users.find(user => user.email == req.cookies.usuario)
        req.session.user = result
    }
    */