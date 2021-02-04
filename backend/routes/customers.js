const express = require('express')
const router = express.Router()

const customerModel = require('../models/customers.model')

//get customers
router.get('/', (req, res) => {
    res.send('request from customers route')

})

module.exports = router