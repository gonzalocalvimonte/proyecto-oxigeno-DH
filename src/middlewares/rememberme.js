const {all,write,generate} = require('../models/users.models')

function rememberMe(req, res, next){

          if (req.cookies && req.cookies.rememberMe){
        let list = all();
        req.session.user = list.find(user => user.email == req.cookies.rememberMe);

        console.log('USUARIO RECORDADO', req.session.user)

    } else {console.log('USUARIO NO RECORDADO')}
    next();
}

module.exports = rememberMe;