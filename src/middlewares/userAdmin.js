const middleware = (req, res, next) => {
    if(req.session.user.email.includes("@o2admin")){
        return next()
    }
    
    return res.redirect('/');
}

module.exports = middleware;