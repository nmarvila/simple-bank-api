let contas = require('../repository/contas')

module.exports.resetState = (req, res) => {
    contas.resetState()
    res.sendStatus(200)
}