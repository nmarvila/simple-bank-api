const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

let contas = [{ "id": 1, "balance": 100 }]

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Simple Bank API')
})

app.post('/reset', (req, res) => {
    contas = []
    res.sendStatus(200)
})

app.get('/balance', (req, res) => {
    let conta = req.query.account_id

    contas.length > 0 ? contas.find((c) => c.id == conta ? res.send(c.balance.toString()) : res.sendStatus(404)) : res.sendStatus(404)
})

app.listen(port, () => {
    console.log(`Simple Bank API listening on port ${port}`)
})