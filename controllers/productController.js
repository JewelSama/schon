const Product = require("../models/productModel")

const getAllProducts = async(req, res) => {
     const products = await Product.find()
     console.log(products)
    res.render('productList', {products:products})
}

const getProduct = (req, res) => {
    res.render('productDetail')
}

module.exports = {getAllProducts, getProduct}