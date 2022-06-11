const contas = require('../repository/contas')

module.exports.getBalance = (req, res) => {
    let saldo = contas.getBalance(req.query.account_id)
    if (saldo == undefined) {
        res.status(404).send('0')
    } else {
        res.status(200).send(saldo)
    }
}