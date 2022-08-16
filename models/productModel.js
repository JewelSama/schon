const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    name:{type: String, required: true},
    rating: { type: String, required: true},
    comment: { type:String, required: true }
}, {
    timestamps: true,
})

const productSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    new:{
        type: Boolean,
        required: true,
        default: false
    },
    percentOff:{
        type: Boolean,
        required: true,
        default: false
    },
    hotSale:{
        type: Boolean,
        required: true,
        default: false
    },
    featuredProducts:{
        type: Boolean,
        required: true,
        default: false
    },
    saleProducts:{
        type: Boolean,
        required: true,
        default: false
    },
    bestPrice:{
        type: Boolean,
        required: true,
        default: false
    },
    reviews: [reviewSchema],
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    },
    numReviews:{
        type: Number,
        required: true,
        default: 0
    },
    oldPrice: {
        type: Number,
        required: true,
        default: 0
    },
    newPrice: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    }
},{
    timestamps: true,
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product