const Product = require("../models/product");
const Category = require("../models/category");
const { Op } = require("sequelize");
const {removeAccents, PriceMaxMin,ordenFunc,} = require("../servicesaux/services");

const getAllProducts = async (req, res) => {
  let { orden, pmax, pmin,start,limit } = req.query;
  
  let products = await Product.findAll({
    include: {
      model: Category,
      as: "category_aux",
      attributes: ["name"],
    },
  });

  if (orden) products = ordenFunc(orden, products);
  if (pmax && pmin) products = PriceMaxMin(pmax, pmin, products);
  
  res.json(products.slice(start,limit));

};

const getbyPk = async (req, res) => {
  let { id } = req.params
  console.log(id)
  let products = await Product.findByPk(id,{
    include: {
      model: Category,
      as: "category_aux",
      attributes: ["name"],
    },
  });

  
if(products) return res.json(products);

res.status(404).json({msg:`not found products by id ${id}`})
 
}; 


const getByCategory = async (req, res) => {
  const { category, orden, pmax, pmin,start,limit } = req.query;
  if (category == 0){ 
    let products = await Product.findAll()
    return res.json(products)
  }
  if (category) {
    try {
      let products = await Product.findAll({
        where: [{ category: category }],
        include: {
          model: Category,
          as: "category_aux",
          attributes: ["name"],
        },
      });

      if (orden) products = ordenFunc(orden, products); 
      if (pmax && pmin) products = PriceMaxMin(pmax, pmin, products);

      if (products.length > 0) return res.json(products.slice(start,limit))

    return  res.status(404).json({ msg: "not found category" });
      
    } catch (err) {
      return console.log(err);
    }
  } else {
    return res.status(404).json({ msg: "not found category" });
  }
};

const getByName = async (req, res) => {
  const { name, orden, pmax, pmin, category,start,limit } = req.query;

  try {
    let products = await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
      include: {
        model: Category,
        as: "category_aux",
        attributes: ["name"],
      },
    });

    if (orden) products = ordenFunc(orden, products);
    if (pmax && pmin) products = PriceMaxMin(pmax, pmin, products);

    if (products.length > 0) {
      
      return res.json(products.slice(start,limit))
    } else {
      return res.status(404).json({ msg: "not found products" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllProducts, getByCategory, getByName,getbyPk };
