const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')


router.get('/', (req, res) => {
    res.send('request from api route')

})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            let payload = {
                subject: registeredUser._id
            }
            let token = jwt.sign(payload, 'secretkey')

            res.status(200).send({ token })
        }
    })
})

router.post("/login", (req, res) => {
    let userData = req.body
    User.findOne({ username: userData.username }, (error, user) => {
        if (error) { console.log(error) } else {
            if (!user) {
                res.status(401).send('Invalid Username')
            } else if (user.password !== userData.password) {
                res.status(401).send('Invalid Password')

            }
            else {
                let payload = {
                    subject: user._id
                }
                let token = jwt.sign(payload, 'secretkey')
                res.status(200).send({ token })
            }
        }
    })

});

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')

    } let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {

        return res.status(401).send('Unauthorized request')

    }
    let payload = jwt.verify(token, 'secretekey')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
req.userId = payload.subject
next()
}

router.get('/subscribers',verifyToken,(req,res)=>{

    
})

module.exports = router