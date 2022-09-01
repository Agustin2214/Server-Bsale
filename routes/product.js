const { Router } = require('express');
const { getAllProducts,getByCategory,getByName } = require('../controllers/product');
const { check } = require("express-validator")

const router = Router();

router.get('/all', getAllProducts)
router.get('/category',getByCategory)
router.get('/name', getByName) 

module.exports = router 
