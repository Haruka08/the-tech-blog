const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model{};

Comment.init(
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
        blog_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'blog',
                key: 'id',
              },
        },
        comment:{
            type: DataTypes.STRING,
            allowNull: true
        },
        date_created:{
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
      }
)

module.exports = Comment;



        