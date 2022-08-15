const getAllProducts = (req, res) => {
    res.render('productList')
}

const getProduct = (req, res) => {
    res.render('productDetail')
}

module.exports = {getAllProducts, getProduct}