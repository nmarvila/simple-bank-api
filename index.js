const express = require('express')
const bodyParser = require('body-parser')

const resetRoute = require('./routes/reset')
const balanceRoute = require('./routes/balance')
const eventRoute = require('./routes/event')

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