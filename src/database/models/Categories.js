module.exports = function(sequelize, dataTypes  ) { 
    let alias = "categories"
    
    let cols = {
        cat_id:{
            type: dataTypes.INTEGER,
            primaryKEY: true,
            //autoIncrement: true,
        },
        
        cat_name:{
            type: dataTypes.STRING

        },
        
        cat_descripcion:{
            type: dataTypes.TEXT

        },
        

    }

    let config = {
        tableName: "categories",
        timestamps: false,
    }

    let categories  = sequelize.define(alias, cols, config)

    categories.associate = function (models) {
        categories.hasMany(models.Products, {
            as: "Products",
            foreingnKey: "category",

        } )

    }

    

    return categories;
    }