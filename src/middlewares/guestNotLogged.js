function guestNotLogged(req, res, next){
	/* Redireccion para visitantes no logueados
    if (req.session.user == 'undefined'){
        return (res.redirect('/login'))
    }
	*/
    next();

}

module.exports = guestNotLogged