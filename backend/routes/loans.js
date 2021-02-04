const express = require('express')
const router = express.Router()
const loanModel =require('../models/loans.model')

//get customers
router.get('/', (req, res) => {
    res.send('request from customers route')

})

module.exports = router