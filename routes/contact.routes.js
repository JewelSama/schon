const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('contactUs')
})

module.exports = router