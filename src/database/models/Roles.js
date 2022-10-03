module.exports = function(sequelize, dataTypes  ) { 
    let alias = "roles"
    
    let cols = {
        rol_id:{
            type: dataTypes.INTEGER,
            primaryKEY: true,
            //autoIncrement: true,
        },
        
        rol_nombre:{
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