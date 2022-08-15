const express = require('express')
const ejs = require('ejs')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
const productRouter = require('./routes/product.routes')
const contactRouter = require('./routes/contact.routes')
const cartRouter = require('./routes/cart.routes')



dotenv.config()

const app = express()

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
app.get('/', (req, res) => {
    res.render('homepage')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))