const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

Class User extends Model{};

Blog.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },  
        userName:{
            type:Datatypes.VARCHAR,
            allowNull: false
        },
        title:{
            type:Datatypes.STRING,
            allowNull: false
        },
        content:{
            type:Datatypes.STRING,
            allowNull: false
        },
        dateCreated:{
            type:Datatypes.,
            allowNull: false
        },
        comment:{
            type:Datatypes.VARCHAR,
            allowNull: true
        },

    }
)