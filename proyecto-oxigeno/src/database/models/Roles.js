module.exports = function(sequelize, dataTypes  ) { 
    let alias = "roles"
    
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            //autoIncrement: true,
        },
        
        nombre:{
            type: dataTypes.STRING
    },
    }

    let config = {
        tableName: "roles",
        timestamps: false,
    }

    let roles  = sequelize.define(alias, cols, config)

    roles.associate = function (models) {
        roles.hasMany(models.Users, {
            as: "Users",
            foreingnKey: "rol",
        } )
    }
    
    return roles;
    }