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

app.get('/balance', (req, res) => contas.find(c => c.id == req.query.account_id ? res.send(c.balance.toString()) : undefined) ?? res.status(404).send("0"))

app.post('/event', (req, res) => {
    let tipo = req.body.type
    let origem = req.body.origin
    let destino = req.body.destination
    let valor = req.body.amount

    switch (tipo) {
        case 'deposit':
            res.status(201).send({ 'destination': contas.find(c => c.id == req.body.destination ? c.balance += req.body.amount : undefined) ?? contas[contas.push({ 'id': req.body.destination, 'balance': req.body.amount }) - 1] })
            break;

        default:
            break;
    }

    if (tipo == 'withdraw') {
        let conta = contas.find(c => c.id == origem)

        if (conta != undefined) {
            conta.balance -= valor
            res.status(201).send({ 'origin': conta })
        }
        else {
            res.status(404).send("0")
        }
    } else if (tipo == 'transfer') {
        let contaOrigem = contas.find(c => c.id == origem)
        let contaDestino = contas.find(c => c.id == destino)

        if (contaOrigem != undefined) {
            contaOrigem.balance -= valor
            if (contaDestino != undefined) {
                contaDestino.balance += valor
            } else {
                contaDestino = { 'id': destino, 'balance': valor }
                contas.push(contaDestino)
            }
            res.status(201).send({ 'origin': contaOrigem, 'destination': contaDestino })
        }
        else {
            res.status(404).send("0")
        }
    }
})

app.listen(port, () => {
    console.log(`Simple Bank API listening on port ${port}`)
})