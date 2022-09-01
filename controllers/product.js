const Product = require('../models/product')

const Category = require('../models/category')
const { removeAccents } = require('../servicesaux/services')

const  getAllProducts = async (req,res)=>{
    let products = await Product.findAll({  
        include:{
        model: Category, as: "category_aux" ,
        attributes:['name']
      }})

    res.json(products)
} 

const  getByCategory= async (req,res)=>{
    let products = await Product.findAll(
        {wheare: },
        {  
        include:{
        model: Category, as: "category_aux" ,
        attributes:['name']
      }})

}
 

module.exports = { getAllProducts,getByParams }