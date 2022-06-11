const contas = require('../repository/contas')

module.exports.getBalance = (req, res) => {
    let conta = contas.contas.find(c => c.id == req.query.account_id)
    if (conta == undefined) {
        return undefined
    } else {
        return conta.balance
    }
}