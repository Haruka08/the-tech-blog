const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model{};

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
            type:Datatypes.DATE,
            allowNull: false
        },
        comment:{
            type:Datatypes.VARCHAR,
            allowNull: true
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
      }
)

module.exports = Blog;