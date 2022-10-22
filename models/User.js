const { model, Datatypes } = require('sequelize')
const sequelize = require('../config/connection')

Class User extends Model{};

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
        password:{
            type:Datatypes.VARCHAR,
            allowNull: false
        }
    }
)