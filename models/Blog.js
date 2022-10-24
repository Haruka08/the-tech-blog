const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model{};

Blog.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },  
        user_name:{
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'user_name',
              },
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        content:{
            type: DataTypes.STRING,
            allowNull: false
        },
        dateCreated:{
            type: DataTypes.DATE,
            allowNull: false
        },
        comment:{
            type: DataTypes.STRING,
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