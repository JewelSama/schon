const express = require('express')
const {getAllProducts, getProduct} = require('../controllers/productController')
const router = express.Router()




router.get('/', getAllProducts)
router.get('/:id', getProduct)


module.exports = router 