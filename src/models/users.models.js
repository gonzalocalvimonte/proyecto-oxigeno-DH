const {resolve} = require('path')
const fs = require('fs')

let model = {
    all: function(){
        let file = resolve(__dirname,'../data','users.json')
        let data = fs.readFileSync(file)
        return JSON.parse(data)
    },
    one: function(id){
        let all = model.all();
        return all.find(e => e.id == id)
    },
    generate:function(data){
        let all = model.all();
        let last = all.pop();
        let user = {}
        user.id = last.id + 1
        user.nombre = data.nombre
        user.apellido = data.apellido 
        user.email = data.email
        user.password = data.password
        user.nacimiento = data.nacimiento
        user.domicilio = data.domicilio
        user.image = data.image
        return user
    },
    write: function(data){
        let file = resolve(__dirname,'../data','users.json')
        let json = JSON.stringify(data,null,2)
        return fs.writeFileSync(file,json)
    }
}

module.exports = model