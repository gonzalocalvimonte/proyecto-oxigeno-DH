module.exports = function(sequelize, dataTypes  ) { 
    let alias = "Products"
    
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        name:{
            type: dataTypes.STRING

        },
        price:{
            type: dataTypes.DOUBLE

        },
        description:{
            type: dataTypes.TEXT

        },
        image:{
            type: dataTypes.STRING

        },
        category_id:{
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
            as: "category",
            foreingnKey: "category_id",
        } )

    };

    

    return Products;
    }