const express = require('express')
const bodyParser = require('body-parser')
const contas = require('./repository/contas')

const resetRoute = require('./routes/reset')
const balanceRoute = require('./routes/balance')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Simple Bank API')
})

app.use('/reset', resetRoute)
app.use('/balance', balanceRoute)

app.post('/event', (req, res) => {
    switch (req.body.type) {
        case 'deposit':
            res.status(201).send({ 'destination': contas.find(c => c.id == req.body.destination ? c.balance += req.body.amount : undefined) ?? contas[contas.push({ 'id': req.body.destination, 'balance': req.body.amount }) - 1] })
            break;

        case 'withdraw':
            res.status(201).send({ 'origin': contas.find(c => c.id == req.body.origin ? c.balance -= req.body.amount : undefined) ?? res.status(404).send('0') })
            break;

        case 'transfer':
            let contaOrigem = contas.find(c => c.id == req.body.origin) ?? res.status(404).send('0')
            let contaDestino = contas.find(c => c.id == req.body.destination) ?? contas[contas.push({ 'id': req.body.destination, 'balance': 0 }) - 1]
            contaOrigem.balance -= req.body.amount
            contaDestino.balance += req.body.amount
            res.status(201).send({ 'origin': contaOrigem, 'destination': contaDestino })
            break;

        default:
            break;
    }
})

app.listen(port, () => {
    console.log(`Simple Bank API listening on port ${port}`)
})