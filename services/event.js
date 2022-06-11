let contas = require('../repository/contas')

module.exports.callEvent = (req, res) => {
    switch (req.body.type) {
        case 'deposit':
            let contaDeposito = contas.contas.find(c => c.id == req.body.destination)
            if (contaDeposito == undefined) {
                let indexConta = contas.contas.push({ 'id': req.body.destination, 'balance': req.body.amount }) - 1
                res.status(201).send({ 'destination': contas.contas[indexConta] })
            } else {
                contaDeposito.balance += req.body.amount
                res.status(201).send({ 'destination': contaDeposito })
            }
            break;

        case 'withdraw':
            let contaSaque = contas.contas.find(c => c.id == req.body.origin)
            if (contaSaque == undefined) {
                res.status(404).send('0')
            } else {
                contaSaque.balance -= req.body.amount
                res.status(201).send({ 'origin': contaSaque })
            }
            break;

        case 'transfer':
            let contaOrigem = contas.contas.find(c => c.id == req.body.origin)
            let contaDestino = contas.contas.find(c => c.id == req.body.destination)
            if (contaOrigem == undefined) {
                res.status(404).send('0')
            } else {
                if (contaDestino == undefined) {
                    let indexConta = contas.contas.push({ 'id': req.body.destination, 'balance': req.body.amount }) - 1
                    contaDestino = contas.contas[indexConta]
                } else {
                    contaDestino.balance -= req.body.amount
                }
                contaOrigem.balance -= req.body.amount
            }
            res.status(201).send({ 'origin': contaOrigem, 'destination': contaDestino })
            break;

        default:
            break;
    }
}