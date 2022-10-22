const { model, Datatypes } = require('sequelize')
const sequelize = require('../config/connection')

class User extends Model{};

User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        userName:{
            type:Datatypes.STRING,
            allowNull: false
        },
        email:{
            type:Datatypes.STRING,
            allowNull: false
        },
        password:{
            type:Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
              },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
      }
)

module.exports = User;