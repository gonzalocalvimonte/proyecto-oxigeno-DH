module.exports = function(sequelize, dataTypes  ) { 
    let alias = "categories"
    
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        name:{
            type: dataTypes.TEXT

        },
        
        description:{
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
<<<<<<< HEAD
            as: "products",
            foreingnKey: "category_id",

        } )
=======
            as: "Products",
            foreingnKey: "category",
        })
>>>>>>> d1c57d10dd902def30bea98b85982152cfbabd86

    }
    return categories;
}