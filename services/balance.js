const contas = require('../repository/contas')

module.exports.getBalance = (req, res) => {
    let conta = contas.contas.find(c => c.id == req.query.account_id)
    if (conta == undefined) {
        res.status(404).send('0')
    } else {
        res.status(200).send(conta.balance.toString())
    }
}