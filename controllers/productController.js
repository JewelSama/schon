const Product = require("../models/productModel")

const getAllProducts = async(req, res) => {
     const products = await Product.find()
     console.log(products)
    res.render('productList', {products:products})
}

const getProduct = async(req, res) => {
    let relatedProduct = await Product.find()
    const relProducts = relatedProduct.slice(0, 5) 

    const product = await Product.findById(req.params.id)


    res.render('productDetail', {product:product, relProducts:relProducts})
}

module.exports = {getAllProducts, getProduct}