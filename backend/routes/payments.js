const express = require('express')
const router = express.Router()

const paymentModel =require('../models/payments.model')
//get customers
router.get('/', (req, res) => {
    res.send('request from customers route')

})

module.exports = router