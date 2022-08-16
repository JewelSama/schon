const express = require('express')
const ejs = require('ejs')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
const productRouter = require('./routes/product.routes')
const contactRouter = require('./routes/contact.routes')
const cartRouter = require('./routes/cart.routes')
const Product = require('./models/productModel')
const connectDB = require('./config/db')



dotenv.config()

const app = express()
connectDB()

if(process.env.NODE_EVN === 'development'){
    app.use(morgan('dev'))
}

app.set('view engine', 'ejs')


//static folder
app.use(express.static(path.join(__dirname, 'public')))



//index route

app.use('/products', productRouter)
app.use('/contact', contactRouter)
app.use('/cart', cartRouter)

app.get('/wishlist', (req, res) => {
    res.render('wishlist')
})
app.get('/', async(req, res) => {
    const products = await Product.find()
    const latestProducts = await Product.find().sort({
        createdAt: 'desc'
    })
    const bestSellerProducts = await Product.find().sort({
        createdAt: 'asc'
    })
    res.render('homepage', {products:products, latestProducts: latestProducts, bestSellerProducts:bestSellerProducts})
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))