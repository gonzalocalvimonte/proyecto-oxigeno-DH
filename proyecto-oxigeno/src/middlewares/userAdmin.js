
const middleware = (req, res, next) => {
    if(req.session.user.roleId === 2){
        return next()
    }
    return res.redirect('/')
}

module.exports = middleware;