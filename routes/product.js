const { Router } = require('express');
const { getAllProducts,getByCategory,getByName, getbyPk } = require('../controllers/product');


const router = Router();

router.get('/all', getAllProducts)
router.get('/category',getByCategory)
router.get('/name', getByName) 
router.get('/:id',getbyPk)
module.exports = router 
