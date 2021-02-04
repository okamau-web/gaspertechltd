const express = require('express')
const router = express.Router()
const invoiceModel =require('../models/invoices.model')

//get customers
router.get('/', (req, res) => {
    res.send('request from customers route')

})

module.exports = router