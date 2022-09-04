const { Router } = require('express');
const { getAllcategorys } = require('../controllers/category');

const router = Router();

router.get('/',getAllcategorys)

module.exports = router;