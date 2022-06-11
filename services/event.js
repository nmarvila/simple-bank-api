let contas = require('../repository/contas')

module.exports.callEvent = (req, res) => {
    switch (req.body.type) {
        case 'deposit':
            let contaDeposito = contas.deposit(req.body.destination, req.body.amount)
            res.status(201).send({ 'destination': contaDeposito })
            break;

        case 'withdraw':
            let contaSaque = contas.withdraw(req.body.origin, req.body.amount)
            if (contaSaque == undefined) {
                res.status(404).send('0')
            } else {
                res.status(201).send({ 'origin': contaSaque })
            }
            break;

        case 'transfer':
            let contasResultado = contas.transfer(req.body.origin, req.body.destination, req.body.amount)
            if (contasResultado.contaOrigem == undefined) {
                res.status(404).send('0')
            } else {
                res.status(201).send({ 'origin': contasResultado.contaOrigem, 'destination': contasResultado.contaDestino })
            }
            break;

        default:
            break;
    }
}