const Product = require('../models/product')
const Category = require('../models/category')
const { Op } = require("sequelize");
const { removeAccents, PriceMaxMin,ordenFunc } = require('../servicesaux/services')


const  getAllProducts = async (req,res)=>{
    const {orden,pmax,pmin} = req.query
    
    let products = await Product.findAll({  
        include:{
        model: Category, as: "category_aux" ,
        attributes:['name']
      }})

      if(orden) products = ordenFunc(orden,products)
      if(pmax && pmin) products = PriceMaxMin(pmax,pmin,products)

    res.json(products)
} 

const  getByCategory= async (req,res)=>{
    const {category,orden,pmax,pmin} = req.query
    if(category){
    
try{
    let products = await Product.findAll( { 
        where:[ { category: category } ],
        include:{
        model: Category, as: "category_aux" ,
        attributes:['name']
      }})

      if(orden){ products = ordenFunc(orden,products)}
      if(pmax && pmin) products = PriceMaxMin(pmax,pmin,products)

     if(products.length > 0){ 
      res.json(products)
    }else{
      res.status(404).json({msg:"not found category"})
    }}catch(err){
       
      console.log(err)
    }
  }else{
    res.status(404).json({msg:"not found category"})
  }
}

const  getByName= async (req,res)=>{
    const {name,orden,pmax,pmin,category} = req.query

    try{
    let products = await Product.findAll( { 
        where: {
            name: {
              [Op.like]: `%${name}%`
            }
          },
        include:{
        model: Category, as: "category_aux" ,
        attributes:['name']
      }})

      if(orden) products = ordenFunc(orden,products)
      if(pmax && pmin) products = PriceMaxMin(pmax,pmin,products)
      
      if(products.length > 0){ 
        res.json(products)
      }else{
        res.status(404).json({msg:"not found products"})
      }
    }catch(err){
      console.log(err)
    }
} 





module.exports = { getAllProducts,getByCategory,getByName }