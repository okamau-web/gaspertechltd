const express = require('express')
const router = express.Router()
const settingModel =require('../models/settings.model')

//get customers
router.get('/', (req, res) => {
    res.send('request from customers route')

})

module.exports = router