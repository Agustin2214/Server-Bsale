const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DBNAME,process.env.USER,process.env.PASSWORD,{
    host: process.env.HOST,
    dialect: process.env.MOTOR,
    //loggin: false,
});
 
module.exports = db