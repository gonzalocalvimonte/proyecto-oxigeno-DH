module.exports = function(sequelize, dataTypes  ) { 
    let alias = "Products"
    
    let cols = {
        sku:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            //autoIncrement: true,

        },
        name:{
            type: dataTypes.STRING

        },
        price:{
            type: dataTypes.DOUBLE

        },
        descripcion:{
            type: dataTypes.TEXT

        },
        image:{
            type: dataTypes.STRING

        },
        category:{
            type: dataTypes.INTEGER

        },
    }

    let config = {
        tableName: "products",
        timestamps: false,
    }

    let Products  = sequelize.define(alias, cols, config)

    Products.associate = function (models) {
        Products.belongsTo(models.categories, {
            as: "categories",
            foreingnKey: "cat_id",
        } )
    };
    return Products;
    }