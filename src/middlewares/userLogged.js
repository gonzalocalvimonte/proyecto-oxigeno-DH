const userLogged = (req, res, next) => {
    
    if (req.session && req.session.user){
        return next()
<<<<<<< HEAD
        }
        return res.redirect('/')
=======
    }
return res.redirect('/')
>>>>>>> 8aaf07586199e1df721e9fde261ac7a9da89a388
    
}

module.exports = userLogged;