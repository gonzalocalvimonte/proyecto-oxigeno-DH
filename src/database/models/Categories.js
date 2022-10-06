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
            as: "products",
            foreingnKey: "category_id",

        } )

    }
    return categories;
}