const Product = require("../models/product")
const Category = require("../models/category")




 
Product.belongsTo(Category, {as: "category_aux",  foreignKey: "category"});
Category.hasMany(Product, {  foreignKey: "category"});

