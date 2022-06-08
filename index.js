const express = require('express')
const app = express()
const port = 3000
let contas = [
    { "id": 1, "balance": 100 }
]

app.get('/', (req, res) => {
    res.send('Simple Bank API')
})

app.get('/balance', (req, res) => {
    let conta = req.query.account_id

    contas.find((c) => {
        c.id == conta ? res.send(c.balance.toString()) : res.sendStatus(404)
    })
})

app.listen(port, () => {
    console.log(`Simple Bank API listening on port ${port}`)
})