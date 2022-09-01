const { DataTypes } = require('sequelize');

const db = require("../db/connection")



const category = db.define('category',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
      
},
{
    freezeTableName: true,
    timestamps: false
  }

)


module.exports = category;