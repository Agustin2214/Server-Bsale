const { DataTypes } = require('sequelize');

const db = require("../db/connection")



const product = db.define('product',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
  
    url_image:{
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    discount:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue : true,
    },  
    category:{
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    
      
},
{
    freezeTableName: true,
    timestamps: false
  }

)


module.exports = product;