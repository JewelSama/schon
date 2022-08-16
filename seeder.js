const mongoose = require('mongoose')
const users = require('./data/users')
const products = require('./data/products')
const Product = require('./models/productModel')
const Order = require('./models/orderModel')
const User = require('./models/userModel')
const connectDB = require('./config/db')
const dotenv = require('dotenv')

dotenv.config()
connectDB()


const importData  = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return {...product, user:adminUser }
        })
        await Product.insertMany(sampleProducts)
        console.log('Data Imported!')
        process.exit(1)
    } catch (error) {
        console.log(`Error: ${error}`)
        process.exit(1)
    }
}
if(process.argv[2] === '-d')
{
    importData()
}