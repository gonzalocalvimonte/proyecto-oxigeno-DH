const {all} = require('../models/users.models')

function rememberMe(req, res, next){

  if (req.cookies && req.cookies.rememberMe){
      let list = all();
      req.session.user = list.find(user => user.email == req.cookies.rememberMe);
      console.log (req.cookies.rememberMe)
    } 
    return next();
}

module.exports = rememberMe;