

const Category = require("../models/category");

const getAllcategorys = async (req,res) => {

   let category = await Category.findAll()
    category.unshift({name:'TODOS',id:0})
   res.json(category)
}

module.exports  = {getAllcategorys}