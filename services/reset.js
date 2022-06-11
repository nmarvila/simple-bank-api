let contas = require('../repository/contas')

module.exports.resetState = (req, res) => {
    contas.contas = []
    res.sendStatus(200)
}