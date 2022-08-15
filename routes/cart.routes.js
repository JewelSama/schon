const express = require('express')
const router = express.Router()
const getCart = require('../controllers/cartController')

router.route('/').get(getCart)



module.exports = router;