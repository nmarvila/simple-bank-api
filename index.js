const express = require('express')
const bodyParser = require('body-parser')

const resetRoute = require('./Routes/Reset')
const balanceRoute = require('./Routes/Balance')
const eventRoute = require('./Routes/Event')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Simple Bank API')
})

app.use('/reset', resetRoute)
app.use('/balance', balanceRoute)
app.use('/event', eventRoute)

app.listen(port, () => {
    console.log(`Simple Bank API listening on port ${port}`)
})