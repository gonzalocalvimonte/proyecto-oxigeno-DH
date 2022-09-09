function userLogged(req, res, next){
    /* poner la redirección que acordemos
    if (req.session.user){
        return (res.redirect('/'))
    }
    */
    next();
}

module.exports = userLogged;