const userLogged = (req, res, next) => {
    
    if (req.session && req.session.user){
        return next()
<<<<<<< HEAD
    }
    return res.redirect('/')
=======
        }
        return res.redirect('/')
    
>>>>>>> 5326aa5227aaaa389aac07719d4adf91bf980f2e
}

module.exports = userLogged;