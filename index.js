const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

let contas = []

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

    contas.length > 0 ? contas.find(c => c.id == conta ? res.send(c.balance.toString()) : res.sendStatus(404)) : res.sendStatus(404)
})

app.post('/event', (req, res) => {
    let tipo = req.body.type
    let destino = req.body.destination
    let valor = req.body.amount

    if (tipo == 'deposit') {
        let conta = contas.find(c => c.id == destino)

        if (conta != undefined) {
            conta.balance += valor
            res.status(201).send({ 'destination': conta })
        }
        else {
            let c = { 'id': destino, 'balance': valor }
            contas.push(c)
            res.status(201).send({ 'destination': c })
        }
    } else if (tipo == 'withdraw') {
        let conta = contas.find(c => c.id == destino)

        if (conta != undefined) {
            conta.balance -= valor
            res.status(201).send({ 'destination': conta })
        }
        else {
            res.sendStatus(404)
        }
    }
})

app.listen(port, () => {
    console.log(`Simple Bank API listening on port ${port}`)
})