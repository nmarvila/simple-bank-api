const balanceService = require('../services/balance')

module.exports.getBalance = (req, res) => {
    const balance = balanceService.getBalance(req, res)
    if (balance == undefined) {
        res.status(404).send('0')
    } else {
        res.status(200).send(balance.toString())
    }
}