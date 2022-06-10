const express = require('express')
const router = express.Router()
let contas = require('../repository/contas')

router.post('/', (req, res) => {
    switch (req.body.type) {
        case 'deposit':
            res.status(201).send({ 'destination': contas.contas.find(c => c.id == req.body.destination ? c.balance += req.body.amount : undefined) ?? contas.contas[contas.contas.push({ 'id': req.body.destination, 'balance': req.body.amount }) - 1] })
            break;

        case 'withdraw':
            res.status(201).send({ 'origin': contas.contas.find(c => c.id == req.body.origin ? c.balance -= req.body.amount : undefined) ?? res.status(404).send('0') })
            break;

        case 'transfer':
            let contaOrigem = contas.contas.find(c => c.id == req.body.origin) ?? res.status(404).send('0')
            let contaDestino = contas.contas.find(c => c.id == req.body.destination) ?? contas.contas[contas.contas.push({ 'id': req.body.destination, 'balance': 0 }) - 1]
            contaOrigem.balance -= req.body.amount
            contaDestino.balance += req.body.amount
            res.status(201).send({ 'origin': contaOrigem, 'destination': contaDestino })
            break;

        default:
            break;
    }
})

module.exports = router