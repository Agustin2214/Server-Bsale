const { Router } = require('express');
const { getAllProducts } = require('../controllers/product');

const router = Router();

router.get('/', getAllProducts)


module.exports = router
