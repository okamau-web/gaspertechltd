const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 3000
const api = require('./routes/api')
const app = express()

app.use(bodyParser.json())
app.use(cors())


const customerRouter = require('./routes/customers')
const paymentRouter = require('./routes/payments')
const loansRouter = require('./routes/loans')
const invoicesRouter = require('./routes/invoices')
const settingsRouter = require('./routes/settings')
const reportsRouter = require('./routes/reports')




mongoose.connect("mongodb://localhost/GasperTechnologies", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("connected to local MongoDB!"))



app.use('/api', api)
app.use('/customers',customerRouter)

app.get('/', (req, res) => {
    res.send('Hello from server 3000')
 })

app.listen(PORT, () => {
    console.log('Server running on localhost:' + PORT)
})