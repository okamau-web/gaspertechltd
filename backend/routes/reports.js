const express = require('express')
const router = express.Router()
const reportModel =require('../models/reports.model')
//get customers
router.get('/', (req, res) => {
    res.send('request from customers route')

})

module.exports = router