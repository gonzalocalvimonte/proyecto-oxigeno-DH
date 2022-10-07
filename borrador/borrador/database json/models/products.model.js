const {resolve} = require('path')
const fs = require('fs')

let model = {

    all: function(){
        let file = resolve(__dirname,'../data','products.json')
        let data = fs.readFileSync(file)
        return JSON.parse(data)
    },

    one: function(sku){
        let all = model.all();
        return all.find(e => e.sku == sku)
    },

    generate:function(data){
        let all = model.all();
        let last = all.pop();
        let product = {}
        product.sku = last.sku + 1 
        product.name = data.name
        product.price = parseInt(data.price)
        product.description = data.description
        product.category = data.category
        product.image = data.image
        return product
    },

    write: function(data){
        let file = resolve(__dirname,'../data','products.json')
        let json = JSON.stringify(data,null,2)
        return fs.writeFileSync(file,json)
    }
}

module.exports = model